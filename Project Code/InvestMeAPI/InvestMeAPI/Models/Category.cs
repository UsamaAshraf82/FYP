using System.Collections.Generic;

namespace InvestMeAPI.Models
{
    public class Category
    {
        public Category()
        {
            Campaign = new HashSet<Campaign>();
        }


        public int CategoryId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Campaign> Campaign { get; set; }
    }
}
