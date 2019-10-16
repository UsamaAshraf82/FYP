namespace InvestMeAPI.DTOS
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public string Password { get; set; }
        public string ProfilePic { get; set; }
        public string Gender { get; set; }

        public string City { get; set; }
        public string Country { get; set; }


        public string Story { get; set; }
    }

}
