using System;

namespace bisocialapp.Models
{
    public class UserRequest
    {
        public int uId { get; set; }

        public string nickname { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string email { get; set; }
        public int genderId { get; set; }
        public string password { get; set; }
    }
}
