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

        public KupovinaKarteController(IUnitOfWork unitofWork)
        {
            _unitOfWork = unitofWork;
        }
        
        [Route("PostKarta")]
        public IHttpActionResult PostKarta([FromBody] string karta)
        {
            TipKarte tip;
            string trajanje;

            #region Vremenska
            DateTime trenutno = DateTime.Now;
            DateTime krajnjeVremenska = DateTime.Now.AddHours(1);
            #endregion

            #region Dnevna
            string krajnjeDnevna = DateTime.Today.ToShortDateString() + " 23:59:59";
            #endregion

            #region Mesecna
            int dan = DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.Month);
            int mesec = DateTime.Now.Month;
            int godina = DateTime.Now.Year;
            string krajnjeMesecna = $"{dan}/{mesec}/{godina} 23:59:59";
            #endregion

            #region Godisnja
            int zadnjiDan = DateTime.DaysInMonth(DateTime.Now.Year, 12);
            int godinaZadnje = DateTime.Now.Year;
            string krajnjeGodisnja = $"{zadnjiDan}/12/{godinaZadnje} 23:59:59";
            #endregion

            #region Ispisi
            string vremenska = $"Vremenska karta je uspesno kupljena {trenutno} i vazi do {krajnjeVremenska}";
            string dnevna = $"Dnevna karta je uspesno kupljena {trenutno} i vazi do {krajnjeDnevna}";
            string mesecna = $"Mesecna karta je uspesno kupljena {trenutno} i vazi do {krajnjeMesecna}";
            string godisnja = $"Godisnja karta je uspesno kupljena {trenutno} i vazi do {krajnjeGodisnja}";
            #endregion

            if (karta == "Vremenska")
            {
                tip = TipKarte.Vremenska;
                trajanje = krajnjeVremenska.ToString();
                sendEmail(vremenska);
            }
            else if(karta == "Dnevna")
            {
                tip = TipKarte.Dnevna;
                trajanje = krajnjeDnevna;
                sendEmail(dnevna);
            }
            else if(karta == "Mesecna")
            {
                tip = TipKarte.Mesecna;
                trajanje = krajnjeMesecna;
                sendEmail(mesecna);
            }
            else
            {
                tip = TipKarte.Godisnja;
                trajanje = krajnjeGodisnja;
                sendEmail(godisnja);
            }

            Karta novaKarta = new Karta(tip);
            novaKarta.TrajanjeKarte = trajanje;

            _unitOfWork.KartaRep.Add(novaKarta);
            _unitOfWork.Complete();

            return Ok($"{karta} karta je uspesno kupljena.");
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