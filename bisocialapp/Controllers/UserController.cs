using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bisocialapp.Data;
using bisocialapp.Models;
using bisocialapp.Dtos;
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
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
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
        public IActionResult Register([FromBody] UserForRegisterDto userForRegisterDto)
        {
            User user = new User();
            byte[] passwordHash,
                passwordSalt;

            user.nickname = userForRegisterDto.nickname;
            user.firstname = userForRegisterDto.firstname;
            user.lastname = userForRegisterDto.lastname;
            user.email = userForRegisterDto.email;
            user.biography = "";
            user.ppUrl = "";
            user.genderId = userForRegisterDto.genderId;
            user.registerDate = DateTime.Now;

            CreatePasswordHash(userForRegisterDto.password, out passwordHash, out passwordSalt);
            user.passHash = passwordHash;
            user.passSalt = passwordSalt;

            try
            {
                if (UserExists(userForRegisterDto.nickname))
                {
                    return StatusCode(409, "Kullanıcı adı daha önce alınmış");
                }

                if (PasswordCheck(userForRegisterDto.password))
                {
                    return Ok("Şifre en az 8 karakter uzunluğunda olmalı!!!");
                }

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

        [HttpGet("Login")]
        public IActionResult Login([FromBody] UserForLoginDto userForLoginDto)
        {
            try
            {
                if (UserExists(userForLoginDto.nickname))
                {
                    User user = _dbContext.Users
                        .Where(u => u.nickname == userForLoginDto.nickname)
                        .FirstOrDefault();

                    var result = VerifyPasswordHash(
                        userForLoginDto.password,
                        user.passHash,
                        user.passSalt
                    );

                    LoggedUser my = new LoggedUser();

                    my.uId = user.uId;
                    my.nickname = user.nickname;
                    my.firstname = user.firstname;
                    my.lastname = user.lastname;
                    my.email = user.email;
                    my.biography = user.biography;
                    my.ppUrl = user.ppUrl;
                    my.genderId = user.genderId;
                    my.registerDate = user.registerDate;

                    return Ok(my);
                }
                else
                {
                    return StatusCode(404, "User not found");
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut("UpdateUser")]
        public IActionResult UpdateUser([FromBody] UserForUpdateDto user)
        {
            User dbUser = new User();

            try
            {
                dbUser = _dbContext.Users.Where(u => u.uId == user.uId).FirstOrDefault();
                var result = VerifyPasswordHash(user.password, dbUser.passHash, dbUser.passSalt);

                if (result)
                {
                    dbUser.nickname = user.nickname;
                    dbUser.firstname = user.firstname;
                    dbUser.lastname = user.lastname;
                    dbUser.email = user.email;
                    dbUser.biography = user.biography;
                    dbUser.ppUrl = user.ppUrl;
                    dbUser.genderId = user.genderId;

                    _dbContext.Entry(dbUser).State = EntityState.Modified;
                    _dbContext.SaveChanges();
                    return Ok(user);
                }
                return Ok("Password Not Correct");
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
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

        [HttpGet("GetFollower/{id}")]
        public IActionResult GetFollower([FromRoute] int id)
        {
            List<Follower> followers = new List<Follower>();

            try
            {
                List<Follow> datas = _dbContext.UserFollow.Where(f => f.followedId == id).ToList();

                foreach (Follow data in datas)
                {
                    Follower follower = new Follower();

                    User user = GetUserById(data.followerId);

                    // followers.Add(follower);
                    follower.id = user.uId;
                    follower.nickname = user.nickname;
                    follower.firstname = user.firstname;
                    follower.lastname = user.lastname;
                    follower.ppUrl = user.ppUrl;
                    follower.followedDate = data.followedDate;

                    followers.Add(follower);
                }

                return Ok(followers);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("GetFollowed/{id}")]
        public IActionResult GetFollowed([FromRoute] int id)
        {
            List<Followed> followedby = new List<Followed>();

            try
            {
                List<Follow> datas = _dbContext.UserFollow.Where(f => f.followerId == id).ToList();

                foreach (Follow data in datas)
                {
                    Followed followed = new Followed();

                    User user = GetUserById(data.followedId);

                    // followers.Add(follower);
                    followed.id = user.uId;
                    followed.nickname = user.nickname;
                    followed.firstname = user.firstname;
                    followed.lastname = user.lastname;
                    followed.ppUrl = user.ppUrl;
                    followed.followedDate = data.followedDate;

                    followedby.Add(followed);
                }

                return Ok(followedby);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        User GetUserById(int id)
        {
            User user = _dbContext.Users.Where(u => u.uId == id).FirstOrDefault();
            return user;
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
            using (var hmac = new System.Security.Cryptography.HMACSHA512(userPasswordSalt))
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

        private bool UserExists(string nickname)
        {
            if (_dbContext.Users.FirstOrDefault(u => u.nickname == nickname) != null)
            {
                return true;
            }
            return false;
        }

        private bool PasswordCheck(string password)
        {
            if (password.Length < 8)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
