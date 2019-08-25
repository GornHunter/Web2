import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { Linija, TipVoznje } from '../linija';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prikaz-linija',
  templateUrl: './prikaz-linija.component.html',
  styleUrls: ['./prikaz-linija.component.css']
})
export class PrikazLinijaComponent implements OnInit {

  promena: boolean = false;
  mes: string = "";

  constructor(private linijeServis: LinijaService, private http: HttpClient) { }

  ngOnInit() {
  }

  ucitajLinije(){
    this.linijeServis.getLinija();
  }

  izbrisiLiniju(id: number){
    this.linijeServis.izbrisiLiniju(id);
  }

  izmeniLiniju(id: number){
    this.promena = true;
    this.linijeServis.getLinijaId(id);
  }

  update(lin: Linija): void{
    console.log('Usao')
    this.linijeServis.sacuvajIzmene(lin).subscribe(() => this.mes = "Azuriran!");
  }
}
