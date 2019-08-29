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

  private poslata = "";
  karta: string = "";
  kupljena: boolean = false;

  constructor(private kartaServis: KupiKartuService, private servis: RegistracijaService) { }

  ngOnInit() {
  }

  addKartaNeregistrovani(karta: string): void {
    this.kupljena = true;
    this.kartaServis.addKartaNeregistrovani(karta).subscribe((data:string) => this.poslata = data);
  }
}
