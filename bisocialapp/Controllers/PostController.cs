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
                List<Comment>? comments = _dbContext.Comments.ToList(); //Comments tablosundan veri.
                List<PostLike>? likes = _dbContext.PostLikes.ToList(); //PostLikes tablosundan veri çekiliyor.

                //List<PostLike>? likes = _dbContext.PostLikes.ToList(); //Beğeni tablosundan veri çekiliyor.

                if (posts.Count() == 0)
                {
                    return StatusCode(404, "No post Found");
                }

                return Ok(posts);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("GetPost/{postId}")]
        public IActionResult Get([FromRoute] int postId)
        {
            try
            {
                var post = _dbContext.Posts.Where(p => p.pId == postId);
                List<Photo>? photos = _dbContext.Photos.ToList(); //Photos tablosundan veri çekiliyor.
                List<Comment>? comments = _dbContext.Comments.ToList(); //Comments tablosundan veri.
                List<PostLike>? likes = _dbContext.PostLikes.ToList(); //PostLikes tablosundan veri çekiliyor.

                return Ok(post);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }
        }

        [HttpGet("GetComment")]
        public IActionResult GetComment()
        {
            try
            {
                List<Comment> comments = _dbContext.Comments.ToList();
                return Ok(comments);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("GetLikes")]
        public IActionResult GetLikes()
        {
            try
            {
                List<PostLike> likes = _dbContext.PostLikes.ToList();
                return Ok(likes);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
