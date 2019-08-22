using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Linija
    {
        private int id;
        private string naziv;
        private TipVoznje tipVoznje;

        public string Naziv
        {
            get { return naziv; }
            set { naziv = value; }
        }

        public TipVoznje TipVoznje
        {
            get { return tipVoznje; }
            set { tipVoznje = value; }
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }

        public Linija() { }
    }
}