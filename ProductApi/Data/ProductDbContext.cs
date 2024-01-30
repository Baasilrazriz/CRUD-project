using Microsoft.EntityFrameworkCore;
using ProductApi.Models;
using System;

namespace ProductApi.Data
{
    public class ProductDbContext: DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=EcommerceApp;Integrated Security=True;User ID=admin;Password=Zxc121216;TrustServerCertificate=True");
        }
    }


}
