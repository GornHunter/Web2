using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/Polasci")]
    public class PolasciController : ApiController
    {
        private DbContext _context;

        IUnitOfWork _unitOfWork;

        public PolasciController(IUnitOfWork unitofWork, DbContext context)
        {
            _unitOfWork = unitofWork;
            _context = context;
        }


    }
}
