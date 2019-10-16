using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvestMeAPI.Models
{
    public class ReturnInvestments
    {

        public int ReturnInvestmentsID { get; set; }

        public int CampaignId { get; set; }

        public Int64 ReturnInvestment { get; set; }

        public DateTime AddedDateTime { get; set; }
        public virtual Campaign Campaign { get; set; }
    }
}
