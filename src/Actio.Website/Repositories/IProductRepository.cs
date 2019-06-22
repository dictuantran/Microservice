using System.Linq;
using Actio.Website.Models;

namespace Actio.Website.Repositories {

    public interface IProductRepository {

        IQueryable<Product> Products { get; }
    }
}