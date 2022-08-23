using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Models
{
    public class LoggedUser
    {
        [Key]
        public int uId { get; set; }

        public string nickname { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string email { get; set; }
        public string biography { get; set; }
        public string ppUrl { get; set; }
        public int genderId { get; set; }
        public DateTime registerDate { get; set; }
    }
}
