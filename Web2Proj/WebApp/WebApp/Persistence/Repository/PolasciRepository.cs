using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class PolasciRepository : Repository<Polasci, int>, IPolasciRepository
    {
        private ApplicationDbContext _context;

        public PolasciRepository(DbContext context) : base(context)
        {
            _context = context as ApplicationDbContext;
        }

        public List<Polasci> GetAllPolasci()
        {
            var response = _context.Polazki.Include(t => t.Linija).ToList();
            return response.Where(x => x.Aktivan).ToList();
        }

        public List<Polasci> GetPolasci(Expression<Func<Polasci, bool>> predicate)
        {
            if (_context.Polazki.Any(predicate))
            {
                return _context.Polazki.Where(predicate).Include(x => x.Linija).ToList();
            }
            return null;
        }
    }
}