﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Korisnik
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Email { get; set; }

        public string Ime { get; set; }

        public string Prezime { get; set; }

        public string Lozinka { get; set; }

        public string DatumRodjenja { get; set; }

        public string Adresa { get; set; }

        public TipKorisnika TipKorisnika { get; set; }

        public string Slika { get; set; }

        public Korisnik() { }

        public Korisnik(TipKorisnika tip)
        {
            TipKorisnika = tip;
        }
    }
}