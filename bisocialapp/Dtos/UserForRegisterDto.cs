using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace bisocialapp.Dtos{
  public class UserForRegisterDto {
    public string nickname { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public int genderId { get; set; }
    public string email { get; set; }
    public string password { get; set; }
  }
}