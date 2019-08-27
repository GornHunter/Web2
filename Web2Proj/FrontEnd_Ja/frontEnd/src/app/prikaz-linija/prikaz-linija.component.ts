import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { Linija, TipVoznje } from '../linija';

@Component({
  selector: 'app-prikaz-linija',
  templateUrl: './prikaz-linija.component.html',
  styleUrls: ['./prikaz-linija.component.css']
})
export class PrikazLinijaComponent implements OnInit {

  promena: boolean = false;
  izbrisan: boolean = false;
  mes: string = "";

  constructor(private linijeServis: LinijaService) { }

  ngOnInit() {
    this.linijeServis.getLinija();
  }

  izbrisiLiniju(id: number): void{
    this.izbrisan = true;
    this.promena = false;
    this.mes = "";
    this.linijeServis.izbrisiLiniju(id);
    this.linijeServis.getLinija();
  }

  izmeniLiniju(id: number){
    this.promena = true;
    this.mes = "";
    this.linijeServis.getLinijaId(id);
  }

  update(lin: Linija): void{
    this.linijeServis.sacuvajIzmene(lin).subscribe((data:string) => this.mes = data);
    this.linijeServis.getLinija();
  }
}
