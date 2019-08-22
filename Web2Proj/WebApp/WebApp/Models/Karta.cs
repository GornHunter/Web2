using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Karta
    {
        private int id;
        private TipKarte tipKarte;
        private string trajanjeKarte;

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }

        public TipKarte TipKarte
        {
            get { return tipKarte; }
            set { tipKarte = value; }
        }

        public string TrajanjeKarte
        {
            get { return trajanjeKarte; }
            set { trajanjeKarte = value; }
        }

        public Karta()
        {
        }

        public Karta(TipKarte tip)
        {
            TipKarte = tip;
        }
    }
}