using System;
using System.ComponentModel.DataAnnotations;

namespace bisocialapp.Data{
  public class SpPost {
    //Post Bilgiler
    [Key]
    public int pId {get; set; }

    public string pText {get; set;}
    public int pType {get; set; }
    public DateTime createDate {get; set;}
    //Kullanıcı Bilgileri
    public string nickname { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public string ppUrl { get; set; }

    //Fotoğraflar 
    public int phId { get; set; }
    public string phUrl { get; set; }

  }
}
