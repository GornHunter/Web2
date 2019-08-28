import { Component, OnInit } from '@angular/core';
import { Korisnik, TipKorisnika } from '../kosrisnik';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-registracija-comp',
  templateUrl: './registracija-comp.component.html',
  styleUrls: ['./registracija-comp.component.css']
})
export class RegistracijaCompComponent implements OnInit {

  mes: string = "";
  lozinka: string = "";
  dodat: boolean = false;

  korisnikInfo: Korisnik = {
    Email: "",
    Ime: "",
    Prezime: "",
    Lozinka: "",
    DatumRodjenja: "",
    Adresa: "",
    TipKorisnika: TipKorisnika.Djak
  }

  constructor(private servisKorisnik: RegistracijaService) { }

  ngOnInit() {
  }

  addKorisnik(korisnik: Korisnik){
    this.dodat = true;
    this.servisKorisnik.addKorisnik(korisnik).subscribe((data:string) => this.mes = data);
  }
}
