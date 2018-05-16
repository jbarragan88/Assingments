using Microsoft.EntityFrameworkCore;
 
namespace Restaurant.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions<Context> options) : base(options) { }
        public DbSet<Review> Review {get; set;}
    }
}