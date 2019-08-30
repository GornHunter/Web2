using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Cenovnik
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public TipKarte TipKarte { get; set; }

        public TipKorisnika TipKorisnika { get; set; }

        public string Cena { get; set; }

        public Cenovnik() { }
    }
}