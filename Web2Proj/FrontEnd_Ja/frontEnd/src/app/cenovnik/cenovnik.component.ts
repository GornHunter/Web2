import { Component, OnInit } from '@angular/core';
import { Cenovnik } from '../cenovnik';
import { RegistracijaService } from '../registracija.service';
import { TipKarte } from '../karta';
import { TipKorisnika } from '../kosrisnik';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})
export class CenovnikComponent implements OnInit {

  mes: string = "";
  promena: boolean = false;
  izmenaIzabrana: boolean = false;

  cenovnik: Cenovnik = {
    TipKarte: TipKarte.Dnevna,
    TipKorisnika: TipKorisnika.Djak,
    Cena: ""
  }

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
    this.servis.getStavke();
  }

  izmeniStavka(id: number){
    this.izmenaIzabrana = true;
    this.promena = true;
    this.mes = "";
    this.servis.getStavkaId(id);
  }

  sacuvaj(cenovnik: Cenovnik){
    this.servis.sacuvajIzmene(cenovnik).subscribe((data:string) => this.mes = data);
  }
}
