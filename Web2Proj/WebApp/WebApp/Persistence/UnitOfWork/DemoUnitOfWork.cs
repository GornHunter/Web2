﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Unity;
using WebApp.Persistence.Repository;

namespace WebApp.Persistence.UnitOfWork
{
    public class DemoUnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;

        [Dependency]
        public IKartaRepository KartaRep { get; set; }

        [Dependency]
        public ILinijaRepository LinijaRep { get; set; }

        [Dependency]
        public IPolasciRepository PolasciRep { get; set; }

        [Dependency]
        public IKorisnikRepository KorisnikRep { get; set; }

        [Dependency]
        public ICenovnikRepository CenovnikRep { get; set; }
      
        public DemoUnitOfWork(DbContext context)
        {
            _context = context;
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}