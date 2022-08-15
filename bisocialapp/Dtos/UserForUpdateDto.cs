using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace bisocialapp.Dtos{
  public class UserForUpdateDto {
    public int uId { get; set; }
    public string nickname { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public string email { get; set; }
    public string biography { get; set; }
    public string ppUrl { get; set; }
    public int genderId { get; set; }
    public string password { get; set; }
  }
}