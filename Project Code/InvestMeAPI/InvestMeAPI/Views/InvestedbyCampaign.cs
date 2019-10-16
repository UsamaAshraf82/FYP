using System;

namespace InvestMeAPI.Views
{
    public class InvestedbyCampaign
    {

        public int CampaignId { get; set; }
        public int UserId { get; set; }
        public String FullName { get; set; }
        public Int64 SumofInvestment { get; set; }
    }
}
