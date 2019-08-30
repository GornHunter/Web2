import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { Linija } from '../linija';

@Component({
  selector: 'app-linija-comp',
  templateUrl: './linija-comp.component.html',
  styleUrls: ['./linija-comp.component.css']
})
export class LinijaCompComponent implements OnInit {

  mes: string = "";
  dodata: boolean = false;

  linijaInfo: Linija = {
    Naziv: "",
    TipVoznje: 0
  }

  constructor(public linijaServis: LinijaService) { }

  ngOnInit() {
  }

  addLinija(): void{
    this.dodata = true;
    this.linijaServis.addLinija(this.linijaInfo).subscribe((data:string) => this.mes = data);
  }
}
