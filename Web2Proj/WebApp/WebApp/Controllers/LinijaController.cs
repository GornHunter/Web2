using System;
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
    [RoutePrefix("api/Linija")]
    public class LinijaController : ApiController
    {
        IUnitOfWork _unitOfWork;

        public LinijaController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }

        [Route("PostLinija")]
        public IHttpActionResult PostLinija([FromBody] Linija lin)
        {
            Linija linija = new Linija();
            linija = lin;

            List<Linija> l = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan);

            if(l == null)
            {
                _unitOfWork.LinijaRep.Add(linija);
                _unitOfWork.Complete();

                return Ok("Linija je uspesno dodata.");
            }

            foreach(var item in l)
            {
                if(linija.Naziv == item.Naziv)
                {
                    return Ok("Linija sa tim nazivom vec postoji!");
                }
            }

            _unitOfWork.LinijaRep.Add(linija);
            _unitOfWork.Complete();

            return Ok("Linija je uspesno dodata.");
        }

        [Route("GetLinija")]
        public IHttpActionResult GetLinija()
        {
            var linije = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan && x.Naziv != null);
            return Ok(linije);
        }

        [Route("GetLinijaId/{id}")]
        public IHttpActionResult GetLinijaId(int id)
        {
            var linija = _unitOfWork.LinijaRep.GetLinija(x => x.Id == id);

            return Ok(linija);
        }

        [Route("GetTipLinije/{id}")]
        public IHttpActionResult GetTipLinije(int id)
        {
            var linije = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan && x.TipVoznje == (TipVoznje)id);

            return Ok(linije);
        }

        [HttpDelete]
        [Route("DeleteLinija/{id}")]
        public IHttpActionResult DeleteLinija(int id)
        {
            var linija = _unitOfWork.LinijaRep.GetLinija(x => x.Id == id);
            if (linija == null)
                return Ok("Linija sa datim id-jem nije nadjena!");

            linija.Aktivan = false;

            var polasci = _unitOfWork.PolasciRep.GetPolasci(x => x.LinijaId == id);
            if (polasci == null)
            {
                _unitOfWork.Complete();
                return Ok("Linija je uspesno obrisana.");
            }

            foreach(var item in polasci)
            {
                item.Aktivan = false;
            }

            _unitOfWork.Complete();

            return Ok("Linija je uspesno obrisana.");
        }

        [Route("AzurirajLiniju")]
        public IHttpActionResult AzurirajLiniju(Linija linija)
        {
            List<Linija> l = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan);
            var lin = _unitOfWork.LinijaRep.GetLinija(x => x.Id == linija.Id);

            foreach (var item in l)
            {
                if (linija.Naziv == item.Naziv && linija.Id == item.Id)
                {
                    lin.Naziv = linija.Naziv;
                    lin.TipVoznje = linija.TipVoznje;

                    _unitOfWork.Complete();

                    return Ok("Linija je uspesno azurirana.");
                }
                else if(linija.Naziv == item.Naziv && linija.Id != item.Id)
                {
                    return Ok("Linija sa tim imenom vec postoji!");
                }
                
            }

            //lin = _unitOfWork.LinijaRep.GetLinija(x => x.Id == linija.Id);         

            lin.Naziv = linija.Naziv;
            lin.TipVoznje = linija.TipVoznje;

            _unitOfWork.Complete();
            
            return Ok("Linija je uspesno azurirana.");
        }
    }
}
