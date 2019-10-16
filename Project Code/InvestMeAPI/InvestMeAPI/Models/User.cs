using System.Collections.Generic;


namespace InvestMeAPI.Models
{
    public class User
    {
        public User()
        {
            Campaign = new HashSet<Campaign>();
            Invester = new HashSet<Invester>();
        }

        public int UserId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string City { get; set; }
        public string Country { get; set; }

        public string ProfilePic { get; set; }
        public string Gender { get; set; }

        public string Story { get; set; }

        public virtual ICollection<Campaign> Campaign { get; set; }
        public virtual ICollection<Invester> Invester { get; set; }
        public virtual ICollection<ReturnInvestments> Return { get; set; }
    }
}
