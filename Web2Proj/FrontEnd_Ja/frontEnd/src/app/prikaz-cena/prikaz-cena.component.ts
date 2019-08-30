import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { Cenovnik } from '../cenovnik';
import { TipKarte } from '../karta';
import { TipKorisnika } from '../kosrisnik';

@Component({
  selector: 'app-prikaz-cena',
  templateUrl: './prikaz-cena.component.html',
  styleUrls: ['./prikaz-cena.component.css']
})
export class PrikazCenaComponent implements OnInit {

  dodato: boolean = false;

  cenovnik: Cenovnik = {
    TipKarte: TipKarte.Vremenska,
    TipKorisnika: TipKorisnika.Djak,
    Cena: ""
  }

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
  }

  getSpecificnaStavka(cenovnik: Cenovnik){
    this.dodato = true;
    this.servis.getSpecificnaStavka(cenovnik);
  }
}
