using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class LinijaRepository : Repository<Linija, int>, ILinijaRepository
    {
        private ApplicationDbContext _context;

        public LinijaRepository(DbContext context) : base(context)
        {
            _context = context as ApplicationDbContext;
        }

        public Linija GetLinija(Expression<Func<Linija, bool>> predicate)
        {
            if (_context.Linije.Any(predicate))
            {
                return _context.Linije.Where(predicate).First();
            }
            return null;
        }

        public List<Linija> GetLinije(Expression<Func<Linija, bool>> predicate)
        {
            if (_context.Linije.Any(predicate))
            {
                return _context.Linije.Where(predicate).ToList();
            }
            return null;
        }
    }
}