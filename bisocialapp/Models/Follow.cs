using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class Follow
    {
        [Key]
        public int id { get; set; }
        public int followerId { get; set; }
        public int followedId { get; set; }
        public DateTime followedDate { get; set; }
    }

    public class Follower
    {
        [Key]
        public int id { get; set; }
        public string nickname { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string ppUrl { get; set; }
        public DateTime followedDate { get; set; }
    }

    public class Followed
    {
        [Key]
        public int id { get; set; }
        public string nickname { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string ppUrl { get; set; }
        public DateTime followedDate { get; set; }
    }
}
