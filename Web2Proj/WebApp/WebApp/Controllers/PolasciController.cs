﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Models;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/Polasci")]
    public class PolasciController : ApiController
    {
        IUnitOfWork _unitOfWork;

        public PolasciController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }

        [Route("PostPolazak")]
        public IHttpActionResult PostPolazak([FromBody] Polasci pol)
        {
            Polasci polazak = new Polasci();
           // polazak = pol;
            polazak.Vreme = pol.Vreme;
            polazak.Linija = pol.Linija;
            polazak.LinijaId = pol.Linija.Id;

            _unitOfWork.PolasciRep.Add(polazak);
            _unitOfWork.Complete();

            return Ok();
        }

        [Route("GetPolasci")]
        public IHttpActionResult GetPolasci(string naziv, TipDana tipDana)
        {
            var linije = _unitOfWork.LinijaRep.GetLinija(x => x.Naziv == naziv && x.Aktivan);

            var polasci = _unitOfWork.PolasciRep.GetPolasci(x => x.TipDana == tipDana && x.Aktivan);

            return Ok(polasci);
        }
    }
}
