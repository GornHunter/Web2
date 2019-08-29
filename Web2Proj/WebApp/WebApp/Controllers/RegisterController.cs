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
            var korisnik = _unitOfWork.KorisnikRep.GetKorisnik(x => x.Email == email && x.Lozinka == lozinka);

            if (kor == null)
                return Ok(new LogovanjeZahtev("Baza je prazna.", false, false, null));

            if (email == "admin" && lozinka == "admin123")
                return Ok(new LogovanjeZahtev("Ulogovani ste kao Admin.", false, true, null));

            foreach (var item in kor)
            {
                if(item.Email == email && item.Lozinka == lozinka)
                    return Ok(new LogovanjeZahtev("", true, false, korisnik));
            }

            return Ok(new LogovanjeZahtev("Korisnik ne postoji u bazi.", false, false, null));
        }

        [Route("AzurirajKorisnika")]
        public IHttpActionResult AzurirajKorisnika(Korisnik korisnik)
        {
            var korisnici = _unitOfWork.KorisnikRep.GetAllKorisnici();
            var kor = _unitOfWork.KorisnikRep.GetKorisnik(x => x.Id == korisnik.Id);

            foreach(var item in korisnici)
            {
                if (item.Email == korisnik.Email && item.Lozinka == korisnik.Lozinka && item.Id == korisnik.Id)
                {
                    kor.Email = korisnik.Email;
                    kor.Ime = korisnik.Ime;
                    kor.Prezime = korisnik.Prezime;
                    kor.Lozinka = korisnik.Lozinka;
                    kor.DatumRodjenja = korisnik.DatumRodjenja;
                    kor.Adresa = korisnik.Adresa;

                    _unitOfWork.Complete();

                    return Ok("Uspesno ste azurirali profil.");
                }
                else if (item.Email == korisnik.Email || item.Lozinka == korisnik.Lozinka)
                    return Ok("Korisnik vec postoji.");
            }

            kor.Email = korisnik.Email;
            kor.Ime = korisnik.Ime;
            kor.Prezime = korisnik.Prezime;
            kor.Lozinka = korisnik.Lozinka;
            kor.DatumRodjenja = korisnik.DatumRodjenja;
            kor.Adresa = korisnik.Adresa;

            _unitOfWork.Complete();

            return Ok("Uspesno ste azurirali profil.");
        }

        [Route("Cenovnik")]
        public IHttpActionResult Cenovnik()
        {
            return Ok();
        }

    }
}
