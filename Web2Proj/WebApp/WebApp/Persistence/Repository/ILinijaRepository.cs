using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public interface ILinijaRepository : IRepository<Linija, int>
    {
        Linija GetLinija(Expression<Func<Linija, bool>> predicate);
        List<Linija> GetAllLinije();
        List<Linija> GetLinije(Expression<Func<Linija, bool>> predicate);
    }
}
