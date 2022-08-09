using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bisocialapp.Data;
using bisocialapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.SqlClient;

namespace bisocialapp.Controllers
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private BiSocialDbContext _dbContext;

        public PostController(BiSocialDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetPosts")]
        public IActionResult Get()
        {
            try
            {
                List<Post>? posts = _dbContext.Posts.Take(10).ToList(); //Posts tablosundan veri çekiliyor.
                List<Photo>? photos = _dbContext.Photos.ToList(); //Photos tablosundan veri çekiliyor.
                //List<User> users = _dbContext.Users.ToList(); //Users tablosundan veri çekiliyor.

                if (posts.Count() == 0)
                {
                    return StatusCode(404, "No post Found");
                }

                return Ok(posts);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }
        }

        [HttpGet("GetPost/{postId}")]
        public IActionResult Get([FromRoute] int postId)
        {
            try
            {
                var post = _dbContext.Posts.Where(p => p.pId == postId);

                return Ok(post);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }
        }

        [HttpGet("SpGetPosts")]
        public IActionResult GetSpPosts()
        {
            return Ok();
        }
    }
}
