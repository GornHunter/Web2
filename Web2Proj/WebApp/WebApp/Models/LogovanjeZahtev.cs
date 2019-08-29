using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class LogovanjeZahtev
    {
        public string Poruka { get; set; }

        public bool LogovanKorisnik { get; set; } = false;

        public bool LogovanAdmin { get; set; } = false;

        public Korisnik KorisnikDetalji { get; set; }

        public LogovanjeZahtev() { }

        public LogovanjeZahtev(string poruka, bool logovanKorisnik, bool logovanAdmin, Korisnik korisnikDetalji)
        {
            Poruka = poruka;
            LogovanKorisnik = logovanKorisnik;
            LogovanAdmin = logovanAdmin;
            KorisnikDetalji = korisnikDetalji;
        }
    }
}