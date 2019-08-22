import { Component, OnInit } from '@angular/core';
import { KupiKartuService } from '../kupi-kartu.service'

@Component({
  selector: 'app-kupovina-karte',
  templateUrl: './kupovina-karte.component.html',
  styleUrls: ['./kupovina-karte.component.css']
})
export class KupovinaKarteComponent implements OnInit {

  private poslata = "";

  constructor(private kartaServis: KupiKartuService) { }

  ngOnInit() {
    this.addKartaNeregistrovani();
  }

  addKartaNeregistrovani(): void {
    this.kartaServis.addKartaNeregistrovani().subscribe(() => this.poslata = "Karta je uspesno kupljena.");
  }
}
