using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class Comment
    {
        [Key]
        public int cId { get; set; }

        public string comment { get; set; }
        public int userId { get; set; }
        public int postId { get; set; }

        public DateTime commentDate { get; set; }
    }
}
