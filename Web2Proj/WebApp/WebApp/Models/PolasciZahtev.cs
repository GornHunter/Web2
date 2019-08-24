using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class PolasciZahtev
    {
        public string LinijaIme { get; set; }

        public TipDana TipDana { get; set; }

        public PolasciZahtev() { }
    }
}