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

            _unitOfWork.LinijaRep.Add(linija);
            _unitOfWork.Complete();

            return Ok();
        }

        [Route("GetLinija")]
        public IHttpActionResult GetLinija()
        {
            var linije = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan && x.Naziv != null);
            return Ok(linije);
        }

        [Route("GetTipLinije/{id}")]
        public IHttpActionResult GetTipLinije(int id)
        {
            var linije = _unitOfWork.LinijaRep.GetLinije(x => x.Aktivan && x.TipVoznje == (TipVoznje)id);

            return Ok(linije);
        }

        [Route("DeleteLinija/{id}")]
        public IHttpActionResult DeleteLinija(int id)
        {
            var linija = _unitOfWork.LinijaRep.GetLinija(x => x.Id == id);
            if (linija == null)
                return BadRequest("Linija sa datim id-jem nije nadjena!");

            linija.Aktivan = false;

            var polasci = _unitOfWork.PolasciRep.GetPolasci(x => x.LinijaId == id);
            if (polasci == null)
                return BadRequest("Ne postoje polasci za datu liniju!");
            foreach(var item in polasci)
            {
                item.Aktivan = false;
            }

            _unitOfWork.Complete();

            return Ok("Uspesno obrisana linija.");
        }

        [Route("AzurirajLiniju")]
        public IHttpActionResult UpdateLinija()
        {
            return Ok();
        }
    }
}
