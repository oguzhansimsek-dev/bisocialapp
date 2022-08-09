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
    public class PhotoController : Controller {
      private BiSocialDbContext _dbContext;

      public PhotoController(BiSocialDbContext dbContext){
        _dbContext = dbContext;
      }

      [HttpGet("GetPhotos")]
      public IActionResult Get(){
        List<Photo> photos = _dbContext.Photos.ToList();
        if(photos.Count == 0){
          return StatusCode(404,"No photos Found");
        }

        return Ok(photos);

        try{}catch(Exception){
          return StatusCode(500,"An error occurred");
        }
      }

       [HttpGet("GetPhotoOfThePost/{postId}")]
      public IActionResult Get([FromRoute] int postId){
        List<Photo> photos = _dbContext.Photos.Where(ph => ph.postId == postId).ToList();
        if(photos.Count == 0){
          return StatusCode(404,"No photos Found");
        }

        return Ok(photos);

        try{}catch(Exception){
          return StatusCode(500,"An error occurred");
        }

      }

    }
}