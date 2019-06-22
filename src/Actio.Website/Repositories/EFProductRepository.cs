using System.Collections.Generic;
using System.Linq;
using Actio.Website.Models;

namespace Actio.Website.Repositories {

    public class EFProductRepository : IProductRepository {
        private ApplicationDbContext context;

        public EFProductRepository(ApplicationDbContext ctx) {
            context = ctx;
        }

        public IQueryable<Product> Products => context.Products;
    }
}
