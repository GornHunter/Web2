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
    }
}
