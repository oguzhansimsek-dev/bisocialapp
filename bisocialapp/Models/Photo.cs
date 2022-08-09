using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Data
{
    public class Photo
    {
        [Key]
        public int phId { get; set; }

        public string phUrl { get; set; }
        public int postId { get; set; }
        public DateTime loadDate { get; set; }
    }
}
