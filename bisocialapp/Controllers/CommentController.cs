using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bisocialapp.Data;
using bisocialapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bisocialapp.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private BiSocialDbContext _dbContext;

        public CommentController(BiSocialDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //TEST PLATFORM
        [HttpGet("GetComments")]
        public IActionResult GetComments()
        {
            try
            {
                List<Comment> comments = _dbContext.Comments.ToList();
                List<User> users = _dbContext.Users.ToList();
                return Ok(comments);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("GetComments/{postId}")]
        public IActionResult GetComments([FromRoute] int postId)
        {
            try
            {
                //Yorum tablosundan veri çekiliyor.
                List<Comment> comments = _dbContext.Comments
                    .Where(c => c.postId == postId)
                    .ToList();

                //User tablosundan veri çekiliyor commentler ile match olması için.
                List<User> users = _dbContext.Users.ToList();

                return Ok(comments);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost("SendComment")]
        public IActionResult SendComment([FromBody] Comment comment)
        {
            Comment dbComment = new Comment();

            try
            {
                dbComment.userId = comment.userId;
                dbComment.postId = comment.postId;
                dbComment.comment = comment.comment;
                dbComment.commentDate = DateTime.Now;
                dbComment.isDeleted = false;

                _dbContext.Comments.Add(dbComment);
                _dbContext.SaveChanges();
                //return StatusCode(200, "Comment added successfully");
                return Ok(dbComment);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete("DeleteComment/{cId}")]
        public IActionResult DeleteComment([FromRoute] int cId)
        {
            try
            {
                Comment comment = _dbContext.Comments.Where(c => c.cId == cId).FirstOrDefault();

                comment.isDeleted = true;
                _dbContext.SaveChanges();
                return Ok(comment);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
