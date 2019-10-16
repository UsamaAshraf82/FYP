using InvestMeAPI.Helper;
using InvestMeAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InvestMeAPI.Service
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        IEnumerable<User> Story();
        User GetById(int id);
        User Create(User user, string password);
        void Update(User user);
        void Delete(int id);
    }

    public class UserService : IUserService
    {
        private readonly InvestMeContext _context;

        public UserService(InvestMeContext context)
        {
            _context = context;
        }

        public User Authenticate(string Email, string password)
        {
            if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(x => x.Email == Email);

            // check if Email exists
            if (user == null)
                return null;

            // check if password is correct
            //      if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            //          return null;

            // authentication successful
            return user;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public User Create(User user, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            if (_context.Users.Any(x => x.Email == user.Email))
                throw new AppException("Email " + user.Email + " is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public void Update(User userParam)
        {
            var user = _context.Users.Find(userParam.UserId);

            if (user == null)
                throw new AppException("User not found");

            if (userParam.Email != user.Email)
            {
                // username has changed so check if the new username is already taken
                if (_context.Users.Any(x => x.Email == userParam.Email))
                    throw new AppException("Username " + userParam.Email + " is already taken");
            }

            // update user properties
            user.FName = userParam.FName;
            user.LName = userParam.LName;
            user.UserId = userParam.UserId;
            user.PhoneNo = userParam.PhoneNo;
            user.ProfilePic = userParam.ProfilePic;
            user.Story = userParam.Story;
            user.Gender = userParam.Gender;
            user.Address = userParam.Address;
            user.City = userParam.City;
            user.Country = userParam.Country;

            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public IEnumerable<User> Story()
        {
            return _context.Users.Where(e => e.Story != null).Take(4).ToList();
        }


        // private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }

}
