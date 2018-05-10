using System;
using System.ComponentModel.DataAnnotations;

namespace Info_Form_Submission.Models
{
    public class Info : BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string First_Name { get; set; }
        [Required]
        [MinLength(4)]
        public string Last_Name { get; set; }
        [Required]
        [Range(1,150)]
        public int Age { get; set; }
        [Required]
        // [EmailAdress]
        public string Email { get; set; }
        [Required]
        [MinLength(8)]
        public string Password { get; set; }
    }
}