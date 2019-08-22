using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    public class Program
    {
        public static void Main(string[] args)
        {
            List<Voznje> voznje = new List<Voznje>
            {
                new Voznje
                {
                    Tip = "Gradski",
                    Dan = "Radni",
                    Linija = "7",
                    Polasci = new List<string>{"06-09", "09-10"}
                },

                new Voznje
                {
                    Tip = "Gradski",
                    Dan = "Radni",
                    Linija = "8",
                    Polasci = new List<string>{"06-09", "09-10"}
                },

                new Voznje
                {
                    Tip = "Prigradski",
                    Dan = "Subota",
                    Linija = "9",
                    Polasci = new List<string>{"05-06", "07-08"}
                },

                new Voznje
                {
                    Tip = "Prigradski",
                    Dan = "Subota",
                    Linija = "9",
                    Polasci = new List<string>{"04-05", "10-13"}
                }
            };

            List<Voznje> test = voznje.FindAll(x => x.Tip == "Prigradski" && x.Dan == "Subota" && x.Linija == "9");

            foreach(var item in test)
            {
                foreach (var item1 in item.Polasci)
                    Console.WriteLine($"Polasci: {item1}");
            }

            /*foreach(var item in voznje)
            {
                foreach (var item1 in item.Polasci)
                {
                    Console.WriteLine($"Tip: {item.Tip}, Dan: {item.Dan}, Linija: {item.Linija}, Polasci: {item1}");
                }
            }*/

            Console.ReadLine();
        }
    }

    public class Voznje
    {
        public string Tip { get; set; }
        public string Dan { get; set; }
        public string Linija { get; set; }
        public List<string> Polasci { get; set; }
        
        public Voznje() { }
    }
}
            /*DateTime d = DateTime.Now;

            DateTime t = DateTime.Now.AddHours(1);

            string r = DateTime.Today.ToShortDateString();

            string last = DateTime.Today.ToLongTimeString();

            int days = DateTime.DaysInMonth(DateTime.Now.Year, DateTime.Now.Month);

            int lastDay = DateTime.DaysInMonth(DateTime.Now.Year, 12);

            int mesec = DateTime.Now.Month;

            int year = DateTime.Now.Year;

            Console.WriteLine($"Vremenska karta je uspesno kupljena {d} i vazi do {t}");

            Console.WriteLine($"Dnevna karta je uspesno kupljena {d} i vazi do {r} 23:59:59");

            Console.WriteLine($"Mesecna karta je uspesno kupljena {d} i vazi do {days}/{mesec}/{year} 23:59:59");

            Console.WriteLine($"Godisnja karta je uspesno kupljena {d} i vazi do {lastDay}/12/{year} 23:59:59");*/
