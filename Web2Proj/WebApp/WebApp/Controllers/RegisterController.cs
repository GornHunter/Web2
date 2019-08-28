using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Models;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/Register")]
    public class RegisterController : ApiController
    {
        IUnitOfWork _unitOfWork;

        public RegisterController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }

        [Route("PostKorisnik")]
        public IHttpActionResult PostKorisnik(Korisnik korisnik)
        {
            var kor = _unitOfWork.KorisnikRep.GetAllKorisnici();

            if(kor == null)
            {
                _unitOfWork.KorisnikRep.Add(korisnik);
                _unitOfWork.Complete();

                return Ok("Korisnik je uspesno dodat.");
            }

            foreach(var item in kor)
            {
                if(item.Email == korisnik.Email || item.Lozinka == korisnik.Lozinka)
                {
                    return Ok("Korisnik sa tom email adresom i lozinkom vec postoji.");
                }
            }

            _unitOfWork.KorisnikRep.Add(korisnik);
            _unitOfWork.Complete();

            return Ok("Korisnik je uspesno dodat.");
        }

        [HttpGet]
        [Route("Logovanje")]
        public IHttpActionResult Logovanje(string email, string lozinka)
        {
            var kor = _unitOfWork.KorisnikRep.GetAllKorisnici();

            if (kor == null)
                return Ok(new LogovanjeZahtev("Baza je prazna.", false, false));

            if (email == "admin" && lozinka == "admin123")
                return Ok(new LogovanjeZahtev("Ulogovani ste kao Admin.", false, true));

            foreach (var item in kor)
            {
                if(item.Email == email && item.Lozinka == lozinka)
                    return Ok(new LogovanjeZahtev("Uspesno ste ulogovani.", true, false));
            }

            return Ok(new LogovanjeZahtev("Korisnik ne postoji u bazi.", false, false));
        }

        [Route("Cenovnik")]
        public IHttpActionResult Cenovnik()
        {
            return Ok();
        }

    }
}
