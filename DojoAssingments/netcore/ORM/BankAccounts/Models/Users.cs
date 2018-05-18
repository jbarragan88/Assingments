using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace BankAccounts.Models
{
    public class User : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public int Balance { get; set; }
        // public int TransactionId { get; set; }
        public List<Transaction> Transaction { get; set;}
        public User()
        {
            Transaction = new List<Transaction>();
            CreatedAt = DateTime.Now;
            Balance = 500;
        }
    }

    public class Transaction : BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public int Amount { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
        public Transaction()
        {
            CreatedAt = DateTime.Now;
        }
    }
}