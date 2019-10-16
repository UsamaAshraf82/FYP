using System;

namespace InvestMeAPI.Views
{
    public class InvestedCampaign
    {
        public int CampaignId { get; set; }
        public string Title { get; set; }
        public string Cardimage { get; set; }
        public Int64 Investment { get; set; }
        public Int64 TotalCost { get; set; }
        public Int64 UserInvestment { get; set; }
    }
}
