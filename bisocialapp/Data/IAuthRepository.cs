using bisocialapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bisocialapp.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string nickOrEmail, string password);
        Task<bool> UserExist(string userName);
    }
}
