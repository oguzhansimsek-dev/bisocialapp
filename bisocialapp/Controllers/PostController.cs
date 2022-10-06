using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bisocialapp.Data;
using bisocialapp.Dtos;
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
                //Posts tablosundan veri çekiliyor.
                List<Post>? posts = _dbContext.Posts
                    .Where(p => p.isDeleted == false)
                    .Take(10)
                    .ToList();

                //Photos tablosundan veri çekiliyor.
                List<Photo>? photos = _dbContext.Photos.Where(ph => ph.isDeleted == false).ToList();

                //Comments tablosundan veri çekiliyor.
                List<Comment>? comments = _dbContext.Comments
                    .Where(c => c.isDeleted == false)
                    .ToList();

                //PostLikes tablosundan veri çekiliyor.
                List<PostLike>? likes = _dbContext.PostLikes.ToList();

                //Users tablosundan postu atan user çekiliyor.
                List<User> users = _dbContext.Users.ToList();

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
                //Photos tablosundan veri çekiliyor.
                List<Photo>? photos = _dbContext.Photos.Where(ph => ph.isDeleted == false).ToList();

                //Comments tablosundan veri çekiliyor.
                List<Comment>? comments = _dbContext.Comments
                    .Where(c => c.isDeleted == false)
                    .ToList();

                //PostLikes tablosundan veri çekiliyor.
                List<PostLike>? likes = _dbContext.PostLikes.ToList();

                //Users tablosundan postu atan user çekiliyor.
                List<User> users = _dbContext.Users.ToList();

                return Ok(post);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }
        }

        [HttpGet("GetPostByUserId/{userId}")]
        public IActionResult GetPostByUserId([FromRoute] int userId)
        {
            try
            {
                List<Post> posts = _dbContext.Posts.Where(p => p.userId == userId).ToList();
                List<Comment> comments = _dbContext.Comments.ToList();
                List<PostLike> likes = _dbContext.PostLikes.ToList();
                List<User> users = _dbContext.Users.ToList();
                List<Photo> photos = _dbContext.Photos.ToList();

                return Ok(posts);
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

        [HttpPost("SetLike")]
        public IActionResult SetLike([FromBody] PostForSetLikeDto like)
        {
            PostLike newlike = new PostLike();
            try
            {
                var result = LikeExist(like);

                if (result == true)
                {
                    PostLike currentLike = _dbContext.PostLikes.FirstOrDefault(
                        l => l.userId == like.userId && l.postId == like.postId
                    );

                    _dbContext.Entry(currentLike).State = EntityState.Deleted;
                    _dbContext.SaveChanges();

                    return Ok("UnLiked");
                }
                else
                {
                    newlike.userId = like.userId;
                    newlike.postId = like.postId;
                    newlike.likeDate = DateTime.Now;

                    _dbContext.PostLikes.Add(newlike);
                    _dbContext.SaveChanges();
                    return Ok("Liked");
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete("DeletePost/{postId}")]
        public IActionResult DeletePost([FromRoute] int postId)
        {
            try
            {
                Post post = _dbContext.Posts.Where(p => p.pId == postId).FirstOrDefault();

                // Post  ile ilişkili fotoğraflar
                List<Photo> photos = _dbContext.Photos.Where(ph => ph.postId == postId).ToList();
                //Post ile ilişkili yorumlar
                List<Comment> comments = _dbContext.Comments
                    .Where(c => c.postId == postId)
                    .ToList();
                //Post ile ilişkili beğeniler
                List<PostLike> likes = _dbContext.PostLikes.Where(l => l.postId == postId).ToList();

                post.isDeleted = true;
                if (post.pType == 1 && post.photos != null)
                {
                    foreach (Photo photo in post.photos)
                    {
                        photo.isDeleted = true;
                    }
                }

                if (post.comments != null)
                {
                    foreach (Comment comment in post.comments)
                    {
                        comment.isDeleted = true;
                    }
                }

                if (post.likes != null)
                {
                    post.likes = null;
                }
                _dbContext.SaveChanges();

                //_dbContext.Photos.Where(ph => ph.postId == postId).Remove();
                return StatusCode(200, "Post Deleted");
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        private bool LikeExist(PostForSetLikeDto like)
        {
            if (
                _dbContext.PostLikes.FirstOrDefault(
                    l => l.userId == like.userId && l.postId == like.postId
                ) != null
            )
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
