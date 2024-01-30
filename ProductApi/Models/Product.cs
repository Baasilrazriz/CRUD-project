using System.ComponentModel.DataAnnotations;
namespace ProductApi.Models
{
    // Models/Product.cs
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
