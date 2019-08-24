import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { Linija } from '../linija';

@Component({
  selector: 'app-linija-comp',
  templateUrl: './linija-comp.component.html',
  styleUrls: ['./linija-comp.component.css']
})
export class LinijaCompComponent implements OnInit {

  private dodata = "";

  linijaInfo: Linija = {
    Naziv: "",
    TipVoznje: 0
  }

  constructor(private linijaServis: LinijaService) { }

  ngOnInit() {
  }

  addLinija(): void{
    this.linijaServis.addLinija(this.linijaInfo).subscribe(() => this.dodata = "Linija je uspesno dodata.")
  }
}
