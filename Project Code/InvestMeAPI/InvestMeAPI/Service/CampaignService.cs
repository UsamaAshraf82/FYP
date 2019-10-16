using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InvestMeAPI.Service
{
    public interface ICampaignService
    {
        Campaign Create(Campaign campaign);
        void Update(Campaign campaign);
        void Delete(int id);


        IEnumerable<Campaign> NewCampaigns();

        IEnumerable<Campaign> TrendingCampaigns();
        IEnumerable<Campaign> GetByCategory(int id);
        Campaign GetById(int id);
        void Visit(int id);
        IEnumerable<Campaign> GetbyUserID(int userID);

        void Investment(int CamapignID, Int64 Investment);
        IEnumerable<InvestedCampaign> GetInvestedCampaign(int userID);
    }

    public class CampaignService : ICampaignService
    {
        private readonly InvestMeContext _context;

        public CampaignService(InvestMeContext context)
        {
            _context = context;
        }

        public Campaign Create(Campaign campaignParam)
        {

            _context.Campaigns.Add(campaignParam);
            _context.SaveChanges();


            return campaignParam;
        }

        public IEnumerable<Campaign> GetByCategory(int id)
        {
            return _context.Campaigns.Where(x => x.CategoryID == id ).ToList();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Campaign GetById(int id)
        {
            return _context.Campaigns.Find(id);
        }

        public void Update(Campaign campaign)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Campaign> NewCampaigns()
        {
            return _context.Campaigns.Where(x => x.IsVarified != "PENDING").OrderByDescending(x => x.AddedDateTime).Take(4).ToList();
        }

        public IEnumerable<Campaign> TrendingCampaigns()
        {
            return _context.Campaigns.Where(x => x.IsVarified != "PENDING").OrderByDescending(x => (x.Views)).Take(4).ToList();
        }

        public void Visit(int id)
        {
            var campaign = _context.Campaigns.Find(id);
            campaign.Views++;

            _context.Campaigns.Update(campaign);
            _context.SaveChanges();
        }

        public IEnumerable<Campaign> GetbyUserID(int userID)
        {
            return _context.Campaigns.Where(e => e.UserId == userID);
        }


        public void Investment(int CamapignID, Int64 Investment)
        {
            var campaign = _context.Campaigns.Find(CamapignID);

            campaign.Investment = campaign.Investment + Investment;

            _context.Update(campaign);
            _context.SaveChanges();

        }

        public IEnumerable<InvestedCampaign> GetInvestedCampaign(int userID)
        {

            var investedCampaign = _context.InvestedCampaign.FromSql("select Campaigns.CampaignId,Title,Cardimage,Campaigns.Investment ,Campaigns.TotalCost,Investers.UserId,SUM(Investers.Investment) AS UserInvestment from Campaigns  inner join Investers on Campaigns.CampaignId = Investers.CampaignId where Investers.UserId = {0} group by Campaigns.Title , Cardimage ,Campaigns.Investment,Investers.UserId,Campaigns.TotalCost ,Campaigns.CampaignId", userID)
                .ToList();
            return investedCampaign;
        }
    }
}
