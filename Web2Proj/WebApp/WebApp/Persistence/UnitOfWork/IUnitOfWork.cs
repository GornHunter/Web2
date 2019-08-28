using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Persistence.Repository;

namespace WebApp.Persistence.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IKartaRepository KartaRep { get; set; }
        ILinijaRepository LinijaRep { get; set; }
        IPolasciRepository PolasciRep { get; set; }
        IKorisnikRepository KorisnikRep { get; set; }

        int Complete();
    }
}
