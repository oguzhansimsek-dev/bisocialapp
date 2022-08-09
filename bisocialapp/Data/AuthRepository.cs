using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using bisocialapp.Models;

namespace bisocialapp.Data
{
    public class AuthRepository : IAuthRepository
    {
        private BiSocialDbContext _dbContext;

        public AuthRepository(BiSocialDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash,
                passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.passHash = passwordHash;
            user.passSalt = passwordSalt;

            return user;
        }

        public async Task<User> Login(string nickname, string password)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.nickname == nickname);
            if (user == null)
            {
                return null;
            }
            if (!VerifyPasswordHash(password, user.passHash, user.passSalt))
            {
                return null;
            }
            return user;
        }

        private bool VerifyPasswordHash(
            string password,
            byte[] userPasswordHash,
            byte[] userPasswordSalt
        )
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != userPasswordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private void CreatePasswordHash(
            string password,
            out byte[] passwordHash,
            out byte[] passwordSalt
        )
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExist(string userName)
        {
            if (await _dbContext.Users.AnyAsync(x => x.nickname == userName))
            {
                return true;
            }
            return false;
        }
    }
}
