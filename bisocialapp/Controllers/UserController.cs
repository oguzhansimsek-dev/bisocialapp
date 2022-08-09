using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bisocialapp.Data;
using bisocialapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bisocialapp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private BiSocialDbContext _dbContext;

        public UserController(BiSocialDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetUsers")]
        public IActionResult Get()
        {
            try
            {
                List<User>? users = _dbContext.Users.ToList();

                //users.Any(); Boş olup olmadığını kontrol etmek için kullanılır.
                if (users.Count() == 0)
                {
                    return StatusCode(404, "No User Found");
                }

                return Ok(users);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }
        }

        [HttpGet("GetUser/{nickname}")]
        public IActionResult Get([FromRoute] string nickname)
        {
            try
            {
                var user = _dbContext.Users.Where(u => u.nickname == nickname).FirstOrDefault();

                if (user == null)
                {
                    return StatusCode(404, "User Not Found");
                }
                return Ok(user);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] UserRequest request)
        {
            User user = new User();

            user.nickname = request.nickname;
            user.firstname = request.firstname;
            user.lastname = request.lastname;
            user.email = request.email;
            user.genderId = request.genderId;

            byte[] passwordHash,
                passwordSalt;
            CreatePasswordHash(request.password, out passwordHash, out passwordSalt);
            user.passHash = passwordHash;
            user.passSalt = passwordSalt;

            try
            {
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
                return Ok(user);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred!");
            }

            //Get All users
            // var users = _dbContext.Users.ToList();
        }

        [HttpPut("UpdateUser")]
        public IActionResult UpdateUser([FromBody] UserRequest request)
        {
            try
            {
                var user = _dbContext.Users.FirstOrDefault(x => x.uId == request.uId);

                if (user.uId == null)
                {
                    return StatusCode(404, "User Not Found");
                }
                user.nickname = request.nickname;
                user.firstname = request.firstname;
                user.lastname = request.lastname;
                user.email = request.email;

                _dbContext.Entry(user).State = EntityState.Modified;
                _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred!");
            }
            var users = _dbContext.Users.ToList();
            return Ok(users);
        }

        [HttpDelete("DeleteUser/{uId}")]
        public IActionResult Delete([FromRoute] int uId)
        {
            try
            {
                var user = _dbContext.Users.FirstOrDefault(x => x.uId == uId);

                if (user.uId == null)
                {
                    return StatusCode(404, "User Not Found");
                }
                _dbContext.Entry(user).State = EntityState.Deleted;
                _dbContext.SaveChanges();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }

            var users = _dbContext.Users.ToList();
            return Ok(users);
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
    }
}
