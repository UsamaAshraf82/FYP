using System;

namespace InvestMeAPI.Models
{
    public class Admin
    {
        public int AdminId { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public DateTime LastAccess { get; set; }
    }
}
