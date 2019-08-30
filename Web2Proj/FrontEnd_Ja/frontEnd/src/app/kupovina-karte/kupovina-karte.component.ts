import { Component, OnInit } from '@angular/core';
import { KupiKartuService } from '../kupi-kartu.service'
import { Karta } from '../karta';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-kupovina-karte',
  templateUrl: './kupovina-karte.component.html',
  styleUrls: ['./kupovina-karte.component.css']
})
export class KupovinaKarteComponent implements OnInit {

  karta: string = "";
  private poslata = "";
  kupljena: boolean = false;

  constructor(private kartaServis: KupiKartuService, private servis: RegistracijaService) { }

  ngOnInit() {
    this.check();
  }

  check(): boolean{
    if(this.servis.log.KorisnikDetalji.Slika == ""){
      return false;
    }
    else{
      return true;
    }
  }

  addKartaNeregistrovani(karta: string): void {
    this.kupljena = true;
    this.kartaServis.addKartaNeregistrovani(karta).subscribe((data:string) => this.poslata = data);
  }
}
