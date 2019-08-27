using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/Registrovanje")]
    public class RegisterController : ApiController
    {
        IUnitOfWork _unitOfWork;

        public RegisterController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }
    }
}
