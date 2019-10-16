using System;
using System.Collections.Generic;


namespace InvestMeAPI.Models
{
    public class Campaign
    {
        public Campaign()
        {
            Invester = new HashSet<Invester>();
        }


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
        public DateTime AddedDateTime { get; set; }

        public string Cardimage { get; set; }
        public string Headerimage { get; set; }

        public int Views { get; set; }
        public string IsVarified { get; set; }
        public string AdminComment { get; set; }

        public string CampaignStatus { get; set; }

        public int UserId { get; set; }
        public Int64 Investment { get; set; }

        public virtual User User { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Invester> Invester { get; set; }
        public virtual ICollection<ReturnInvestments> ReturnInvestments { get; set; }
    }
}
