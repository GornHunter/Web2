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
                return Ok(new LogovanjeZahtev("Baza je prazna.", true, false, false, null));

            if (email == "admin" && lozinka == "admin123")
                return Ok(new LogovanjeZahtev("Ulogovani ste kao Admin.", false, false, true, null));

            foreach (var item in kor)
            {
                if(item.Email == email && item.Lozinka == lozinka)
                    return Ok(new LogovanjeZahtev("", false, true, false, korisnik));
            }

            return Ok(new LogovanjeZahtev("Korisnik ne postoji u bazi.", true, false, false, null));
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
                    kor.Slika = korisnik.Slika;

                    _unitOfWork.Complete();

                    return Ok("Uspesno ste azurirali profil.");
                }
                else if ((item.Email == korisnik.Email || item.Lozinka == korisnik.Lozinka) && item.Id != korisnik.Id)
                    return Ok("Korisnik vec postoji.");
            }

            kor.Email = korisnik.Email;
            kor.Ime = korisnik.Ime;
            kor.Prezime = korisnik.Prezime;
            kor.Lozinka = korisnik.Lozinka;
            kor.DatumRodjenja = korisnik.DatumRodjenja;
            kor.Adresa = korisnik.Adresa;
            kor.Slika = korisnik.Slika;

            _unitOfWork.Complete();

            return Ok("Uspesno ste azurirali profil.");
        }

        [Route("DodajStavku")]
        public IHttpActionResult DodajStavku(Cenovnik cenovnik)
        {
            var cen = _unitOfWork.CenovnikRep.GetAllStavke();
            if(cen == null)
            {
                _unitOfWork.CenovnikRep.Add(cenovnik);
                _unitOfWork.Complete();

                return Ok("Uspesno je dodata stavka u cenovnik.");
            }

            foreach(var item in cen)
            {
                if (item.TipKarte == cenovnik.TipKarte && item.TipKorisnika == cenovnik.TipKorisnika)
                    return Ok("Vec postoji cena za dati tip karte i tip korisnika.");
            }

            _unitOfWork.CenovnikRep.Add(cenovnik);
            _unitOfWork.Complete();

            return Ok("Uspesno je dodata stavka u cenovnik.");
        }

        [Route("GetStavke")]
        public IHttpActionResult GetStavke()
        {
            var cen = _unitOfWork.CenovnikRep.GetAllStavke();

            return Ok(cen);
        }

        [HttpGet]
        [Route("GetSpecificnaStavka")]
        public IHttpActionResult GetSpecificnaStavka(TipKarte tipKarte, TipKorisnika tipKorisnika)
        {
            var cen = _unitOfWork.CenovnikRep.GetStavka(x => x.TipKarte == tipKarte && x.TipKorisnika == tipKorisnika);

            return Ok(cen.Cena);
        }

        [Route("GetStavkaId/{id}")]
        public IHttpActionResult GetStavkaId(int id)
        {
            var cen = _unitOfWork.CenovnikRep.GetStavka(x => x.Id == id);

            return Ok(cen);
        }

        [Route("AzurirajStavku")]
        public IHttpActionResult AzurirajStavku(Cenovnik cenovnik)
        {
            var cen = _unitOfWork.CenovnikRep.GetStavka(x => x.Id == cenovnik.Id);

            cen.Cena = cenovnik.Cena;

            _unitOfWork.Complete();

            return Ok("Uspesno azurirana cena stavke.");
        }
    }
}