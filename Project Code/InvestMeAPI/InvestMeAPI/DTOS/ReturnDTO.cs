using System;

namespace InvestMeAPI.DTOS
{
    public class ReturnDTO
    {
        public int CampaignId { get; set; }
        public int UserId { get; set; }


        public string Email { get; set; }
        public string card_number { get; set; }
        public string EX_Date { get; set; }
        public string cvc { get; set; }

        public Int64 Amount { get; set; }
    }
}
