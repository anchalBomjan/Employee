using Employee.API.Model;
using Microsoft.EntityFrameworkCore;

namespace Employee.API.Data
{
    public class ApplicationDbContext:DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {


             
        }

        public DbSet<Staff> Staffs { get; set; }
    }
}
