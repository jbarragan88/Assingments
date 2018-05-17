using System.ComponentModel.DataAnnotations;
namespace BankAccounts.Models
{
    public class LoginViewModel : BaseEntity
    { 
        [Required]
        [EmailAddress]
        public string Email { get; set; }
 
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}