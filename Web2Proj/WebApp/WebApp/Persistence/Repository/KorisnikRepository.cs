using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class KorisnikRepository : Repository<Korisnik, int>, IKorisnikRepository
    {
        private ApplicationDbContext _context;

        public KorisnikRepository(DbContext context) : base(context)
        {
            _context = context as ApplicationDbContext;
        }

        public Korisnik GetKorisnik(Expression<Func<Korisnik, bool>> predicate)
        {
            if (_context.Korisnici.Any(predicate))
            {
                return _context.Korisnici.Where(predicate).First();
            }
            return null;
        }

        public List<Korisnik> GetAllKorisnici()
        {
            var response = _context.Korisnici.ToList();
            return response;
        }

        public List<Korisnik> GetKorisnici(Expression<Func<Korisnik, bool>> predicate)
        {
            if (_context.Korisnici.Any(predicate))
            {
                return _context.Korisnici.Where(predicate).ToList();
            }
            return null;
        }
    }
}