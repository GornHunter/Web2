using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public interface IKorisnikRepository : IRepository<Korisnik, int>
    {
        Korisnik GetKorisnik(Expression<Func<Korisnik, bool>> predicate);
        List<Korisnik> GetAllKorisnici();
        List<Korisnik> GetKorisnici(Expression<Func<Korisnik, bool>> predicate);
    }
}
