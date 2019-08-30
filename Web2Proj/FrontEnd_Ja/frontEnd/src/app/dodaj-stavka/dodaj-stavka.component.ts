import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { Cenovnik } from '../cenovnik';
import { TipKarte } from '../karta';
import { TipKorisnika } from '../kosrisnik';

@Component({
  selector: 'app-dodaj-stavka',
  templateUrl: './dodaj-stavka.component.html',
  styleUrls: ['./dodaj-stavka.component.css']
})
export class DodajStavkaComponent implements OnInit {

  mes: string = "";
  dodat: boolean = false;

  cenovnik: Cenovnik = {
    TipKarte: TipKarte.Vremenska,
    TipKorisnika: TipKorisnika.Djak,
    Cena: ""
  }

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
  }

  addStavka(cenovnik: Cenovnik){
    this.dodat = true;
    this.servis.addStavka(cenovnik).subscribe((data:string) => this.mes = data);
  }
}
