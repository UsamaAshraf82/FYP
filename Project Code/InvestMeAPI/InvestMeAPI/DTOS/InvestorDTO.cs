using System;

namespace InvestMeAPI.DTOS
{
    public class InvestorDTO
    {

        public int InvesterId { get; set; }

        public int CampaignId { get; set; }
        public int UserId { get; set; }


        public string email { get; set; }
        public string card_number { get; set; }
        public string EX_Date { get; set; }
        public string cvc { get; set; }

        public Int64 Investment { get; set; }
    }
}
