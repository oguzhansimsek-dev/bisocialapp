using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class Photo
    {
        [Key]
        public int phId { get; set; }

        public string phUrl { get; set; }
        public int postId { get; set; }
        public DateTime loadDate { get; set; }
        public bool isDeleted { get; set; }
    }
}
