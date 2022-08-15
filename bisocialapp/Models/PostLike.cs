using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class PostLike
    {
        [Key]
        public int pLikeId { get; set; }

        public int userId { get; set; }
        public int postId { get; set; }
        public DateTime likeDate { get; set; }
    }
}
