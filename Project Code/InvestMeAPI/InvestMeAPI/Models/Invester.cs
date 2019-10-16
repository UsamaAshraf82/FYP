using System;

namespace InvestMeAPI.Models
{
    public class Invester
    {

        public int InvesterId { get; set; }

        public int CampaignId { get; set; }
        public int UserId { get; set; }

        public Int64 Investment { get; set; }
        public Int64 AdminShare { get; set; }
        public DateTime AddedDateTime { get; set; }
        public virtual Campaign Campaign { get; set; }
        public virtual User User { get; set; }
    }
}
