using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class Post
    {
        [Key]
        public int pId { get; set; }

        public string pText { get; set; }
        public int userId { get; set; }
        public int pType { get; set; }

        public DateTime createDate { get; set; }

        //Fotoğraflar
        public ICollection<Photo> photos { get; set; }
        public ICollection<Comment> comments { get; set; }

        //Beğeniler
        public ICollection<PostLike> likes { get; set; }
    }
}
