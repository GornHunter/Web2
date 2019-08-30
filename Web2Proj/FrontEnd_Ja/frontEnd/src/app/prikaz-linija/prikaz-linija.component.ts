import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { Linija, TipVoznje } from '../linija';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-prikaz-linija',
  templateUrl: './prikaz-linija.component.html',
  styleUrls: ['./prikaz-linija.component.css']
})
export class PrikazLinijaComponent implements OnInit {

  promena: boolean = false;
  izbrisan: boolean = false;
  izmenaIzabrana: boolean = false;
  mes: string = "";

  constructor(private linijeServis: LinijaService, private servis: RegistracijaService) { }

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
    this.izmenaIzabrana = true;
    this.promena = true;
    this.linijeServis.message = "";
    this.mes = "";
    this.linijeServis.getLinijaId(id);
  }

  update(lin: Linija): void{
    this.linijeServis.sacuvajIzmene(lin).subscribe((data:string) => this.mes = data);
    this.linijeServis.getLinija();
  }
}
