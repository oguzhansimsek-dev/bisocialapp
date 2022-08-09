using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Data
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
    }
}
