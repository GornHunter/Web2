using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public interface ICenovnikRepository : IRepository<Cenovnik, int>
    {
        Cenovnik GetStavka(Expression<Func<Cenovnik, bool>> predicate);
        List<Cenovnik> GetAllStavke();
        List<Cenovnik> GetStavke(Expression<Func<Cenovnik, bool>> predicate);
    }
}
