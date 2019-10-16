using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InvestMeAPI.Service
{
    public interface IAdminService
    {
        Admin Authenticate(string username, string password);

        IEnumerable<Campaign> PendingCampaign();
        IEnumerable<DashboardDetails> DashboardDetails();
        IEnumerable<Campaign> GetCampaigns();
        void Accepted(int CampaignId);
        void Rejected(int CampaignId);
        IEnumerable<User> UserDetails();
        User UserDetails(int userId);

        IEnumerable<InvestedDetails> AdminInvestedCampaignView(int CampaignId);
        IEnumerable<MonthlyReport> MonthlyReport();
    }

    public class AdminService : IAdminService
    {
        private readonly InvestMeContext _context;

        public AdminService(InvestMeContext context)
        {
            _context = context;
        }

        public Admin Authenticate(string Username, string password)
        {
            if (string.IsNullOrEmpty(Username) || string.IsNullOrEmpty(password))
                return null;

            var admin = _context.Admins.SingleOrDefault(x => x.Username == Username);

            // check if Email exists
            if (admin == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, admin.PasswordHash, admin.PasswordSalt))
                return null;

            // authentication successful
            return admin;
        }


        public Admin Create(Admin admin, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            if (_context.Admins.Any(x => x.Username == admin.Username))
                throw new AppException("Username " + admin.Username + " is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            admin.PasswordHash = passwordHash;
            admin.PasswordSalt = passwordSalt;
            _context.Admins.Add(admin);
            _context.SaveChanges();

            return admin;
        }

        public IEnumerable<Campaign> PendingCampaign()
        {
            return _context.Campaigns.Where(x => x.IsVarified == "PENDING");
        }

        public IEnumerable<DashboardDetails> DashboardDetails()
        {
            var dashboarddetails = _context.DashboardDetails.FromSql("select count(distinct(Campaigns.CampaignId)) as TotalCampaign, count(case CampaignStatus when 'GOING' then 1 else null end) as OnGoing,sum(AdminShare) as Profit from Campaigns left join Investers on Campaigns.CampaignId = Investers.CampaignId ;");

            return dashboarddetails;
        }

        public IEnumerable<InvestedDetails> AdminInvestedCampaignView(int CampaignId)
        {
            var InvestedDetails = _context.InvestedDetails.FromSql("select u.Email, u.fname+' '+u.lname as Fullname,i.Investment,i.AddedDateTime from users u inner join Investers i on  u.UserId=i.UserId where i.CampaignId={0}",CampaignId);
            return InvestedDetails;
        }

        public IEnumerable<MonthlyReport> MonthlyReport()
        {
            var InvestedDetails = _context.MonthlyReport.FromSql("select MONTH(AddedDateTime) as Month,SUM(AdminShare) as MonthlyProfit from Investers Group by MONTH(AddedDateTime)");
            return InvestedDetails;
        }

        public IEnumerable<Campaign> GetCampaigns()
        {
            var campaign = _context.Campaigns;
            return campaign;
        }

        public void Accepted(int CampaignId)
        {
            var campaign = _context.Campaigns.Find(CampaignId);
            campaign.IsVarified = "ACCEPTED";
            _context.Campaigns.Update(campaign);
            _context.SaveChanges();
        }
        public void Rejected(int CampaignId)
        {
            var campaign = _context.Campaigns.Find(CampaignId);
            campaign.IsVarified = "REJECTED";
            _context.Campaigns.Update(campaign);
            _context.SaveChanges();
        }

        public IEnumerable<User> UserDetails()
        {
            var users = _context.Users;

            return users;
        }
        public User UserDetails(int userId)
        {
            var users = _context.Users.Find(userId);

            return users;
        }

        // private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }


    }

}
