using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using InvestMeAPI.Views;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace InvestMeAPI.Service
{
    public interface IInvestorService
    {
        Invester NewInvestment(Invester investment);
        IEnumerable<InvestedbyCampaign> GetInvestorbyCampaign(int campaignID);
    }

    public class InvestorService : IInvestorService
    {
        private readonly InvestMeContext _context;

        public InvestorService(InvestMeContext context)
        {
            _context = context;
        }


        public Invester NewInvestment(Invester investorParam)
        {

            _context.Investers.Add(investorParam);
            _context.SaveChanges();


            return investorParam;
        }

        public IEnumerable<InvestedbyCampaign> GetInvestorbyCampaign(int campaignID)
        {
            var InvestedDetails = _context.InvestedbyCampaign.FromSql("select CampaignId,u.UserId,u.FName+' '+u.LName as FullName,sum(i.Investment) as SumofInvestment from Investers i inner join Users u on i.UserId=u.UserId  where CampaignId ={0} group by CampaignId,u.UserId,u.FName,u.LName;", campaignID);
            return InvestedDetails;
        }

    }
}
