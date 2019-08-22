using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Polasci
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Linija")]
        public int LinijaId { get; set; }

        public Linija Linija { get; set; }

        public string Vreme { get; set; }

        public bool Aktivan { get; set; } = true;

        public Polasci() { }
    }
}