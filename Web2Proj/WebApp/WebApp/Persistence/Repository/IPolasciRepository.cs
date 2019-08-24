using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public interface IPolasciRepository : IRepository<Polasci, int>
    {
        List<Polasci> GetAllPolasci();
        List<Polasci> GetPolasci(Expression<Func<Polasci, bool>> predicate);
    }
}
