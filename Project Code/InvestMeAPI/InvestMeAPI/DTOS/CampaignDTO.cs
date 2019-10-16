using System;

namespace InvestMeAPI.DTOS
{
    public class CampaignDTO
    {



        public int? userID { get; set; }


        public int CampaignId { get; set; }

        public string Title { get; set; }
        public string Stage { get; set; }

        public int? CategoryID { get; set; }

        public string Tag1 { get; set; }
        public string Tag2 { get; set; }
        public string Tag3 { get; set; }

        public string Summary { get; set; }
        public string Discription { get; set; }

        public string City { get; set; }
        public string Country { get; set; }

        public Int64? TotalCost { get; set; }
        public string CurrencyUnit { get; set; }
        public Int64? Fund { get; set; }

        public DateTime? EstimatedFirstProfit { get; set; }
        public DateTime? NeedFundBefore { get; set; }

        public string Cardimage { get; set; }
        public string Headerimage { get; set; }


        public int UserId { get; set; }

    }
}
