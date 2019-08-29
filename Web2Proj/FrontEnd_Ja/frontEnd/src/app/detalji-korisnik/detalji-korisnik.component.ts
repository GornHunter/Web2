import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { Korisnik } from '../kosrisnik';

@Component({
  selector: 'app-detalji-korisnik',
  templateUrl: './detalji-korisnik.component.html',
  styleUrls: ['./detalji-korisnik.component.css']
})
export class DetaljiKorisnikComponent implements OnInit {

  mes: string = "";
  sacuvan: boolean = false;
  tip: string = "";

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
    if(this.servis.log.KorisnikDetalji.TipKorisnika == 0){
      this.tip = "Djak";
    }
    else if(this.servis.log.KorisnikDetalji.TipKorisnika == 1){
      this.tip = "Penzioner";
    }
    else{
      this.tip = "RegularniPutnik";
    }
  }

  updateKorisnik(korisnik: Korisnik){
    this.sacuvan = true;
    this.servis.updateKorisnik(korisnik).subscribe((data:string) => this.mes = data);
  }
}
