import { Component, OnInit } from '@angular/core';
import { RedVoznjiService } from '../red-voznji.service';
import { TipVoznje } from '../linija';
import { PolasciZahtev, TipDana } from '../polasci';

@Component({
  selector: 'app-red-voznje',
  templateUrl: './red-voznje.component.html',
  styleUrls: ['./red-voznje.component.css']
})
export class RedVoznjeComponent implements OnInit {

  tipVoznje: string;

  postojeLinije: boolean = false;
  polasci: boolean = false;

  redoviVoznje: PolasciZahtev = {
    LinijaIme: "",
    TipDana: TipDana.RadniDan
  };

  constructor(private serviceVoznje: RedVoznjiService) { }

  ngOnInit() {
  }

  ucitajLinije(){
    let tip: number;
    this.postojeLinije = true;
    if(this.tipVoznje == "Gradski"){
      tip = 0;
    }
    else{
      tip = 1;
    }
    this.serviceVoznje.getLinija(tip);
  }

  ispisPolazaka(){
    this.polasci = true;
    this.serviceVoznje.getPolasci(this.redoviVoznje);
  }
}