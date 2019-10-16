using System;

namespace InvestMeAPI.DTOS
{
    public class AdminDTO
    {
        public int AdminId { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime LastAccess { get; set; }
    }

}
