using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class CenovnikRepository : Repository<Cenovnik, int>, ICenovnikRepository
    {
        private ApplicationDbContext _context;

        public CenovnikRepository(DbContext context) : base(context)
        {
            _context = context as ApplicationDbContext;
        }

        public Cenovnik GetStavka(Expression<Func<Cenovnik, bool>> predicate)
        {
            if (_context.Cenovnici.Any(predicate))
            {
                return _context.Cenovnici.Where(predicate).First();
            }
            return null;
        }

        public List<Cenovnik> GetAllStavke()
        {
            var response = _context.Cenovnici.ToList();
            return response;
        }

        public List<Cenovnik> GetStavke(Expression<Func<Cenovnik, bool>> predicate)
        {
            if (_context.Cenovnici.Any(predicate))
            {
                return _context.Cenovnici.Where(predicate).ToList();
            }
            return null;
        }
    }
}