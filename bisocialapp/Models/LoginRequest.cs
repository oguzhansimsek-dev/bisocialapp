using System;

namespace bisocialapp.Models
{
    public class LoginRequest
    {
        public string nickOrEmail { get; set; }
        public string password { get; set; }
    }
}
