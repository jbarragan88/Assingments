using System;
using System.ComponentModel.DataAnnotations;

namespace Login_Registration.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }

    public class User : BaseEntity
    {   
        [Required]
        [MinLength(2)]
        public string First_Name  { get; set;}

        [Required]
        [MinLength(2)]
        public string Last_Name { get; set;}

        [Required]
        public string Email  { get ; set; }

        [Required]
        [MinLength(8)]
        public string Password { get; set; }

        [Required]
        [Compare("Password",ErrorMessage="Password and confirmation do not match.")]
        public string Confirm_Password { get; set;} 

    }
}