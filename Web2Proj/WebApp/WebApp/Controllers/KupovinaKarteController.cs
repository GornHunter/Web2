using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using WebApp.Models;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/KupovinaKarte")]
    public class KupovinaKarteController : ApiController
    {
        IUnitOfWork _unitOfWork;

        public static List<Karta> karte = new List<Karta>
        {
            new Karta
            {
                Id = 1,
                TipKarte = TipKarte.Dnevna,
                TrajanjeKarte = "18/7/2019 12:12:14"
            },

            new Karta
            {
                Id = 2,
                TipKarte = TipKarte.Vremenska,
                TrajanjeKarte = "19/3/2019 34:45:67"
            }
        };

        public KupovinaKarteController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }

        [Route("GetKarta")]
        public List<Karta> GetKarte()
        {
            return karte;
        }
        
        [Route("PostKarta")]
        public IHttpActionResult PostKarta([FromBody] string karta)
        {
            TipKarte tip;

            DateTime trenutno = DateTime.Now;

            DateTime krajnje = DateTime.Now.AddHours(1);

            string vremenska = $"Vremenska karta je uspesno kupljena {trenutno} i vazi do {krajnje}";

            if (karta == "Vremenska")
            {
                tip = TipKarte.Vremenska;
                sendEmail(vremenska);
            }
            else if(karta == "Dnevna")
            {
                tip = TipKarte.Dnevna;
            }
            else if(karta == "Mesecna")
            {
                tip = TipKarte.Mesecna;
            }
            else
            {
                tip = TipKarte.Godisnja;
            }

            Karta novaKarta = new Karta(tip);
            novaKarta.TrajanjeKarte = krajnje.ToString();

            _unitOfWork.KartaRep.Add(novaKarta);
            _unitOfWork.Complete();

            return Ok();
        }

        private void sendEmail(string body)
        {
            MailMessage mailMessage = new MailMessage("igigotika@gmail.com", "igigotika@gmail.com");
            mailMessage.Subject = "Kupljena karta";
            mailMessage.Body = body;

            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
            smtpClient.Credentials = new NetworkCredential()
            {
                UserName = "igigotika@gmail.com",
                Password = "ademorfis31"
            };
            smtpClient.EnableSsl = true;
            smtpClient.Send(mailMessage);
        }
    }
}
