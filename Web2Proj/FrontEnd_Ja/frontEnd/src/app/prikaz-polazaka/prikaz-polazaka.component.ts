import { Component, OnInit } from '@angular/core';
import { PolasciService } from '../polasci.service';
import { Polasci } from '../polasci';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-prikaz-polazaka',
  templateUrl: './prikaz-polazaka.component.html',
  styleUrls: ['./prikaz-polazaka.component.css']
})
export class PrikazPolazakaComponent implements OnInit {

  mes: string = "";
  izbrisan: boolean = false;
  izmena: boolean = false;

  constructor(private servisPolazak: PolasciService, private servis: RegistracijaService) { }

  ngOnInit() {
    this.servisPolazak.getPolazak();
  }

  izbrisiPolazak(id: number){
    this.izbrisan = true;
    this.izmena = false;
    this.mes = "";
    this.servisPolazak.izbrisiPolazak(id);
    this.servisPolazak.getPolazak();
  }

  izmeniPolazak(id: number){
    this.izmena = true;
    this.mes = "";
    this.servisPolazak.getPolazakId(id);
  }

  update(pol: Polasci): void{
    this.servisPolazak.sacuvajIzmene(pol).subscribe((data:string) => this.mes = data);
    this.servisPolazak.getPolazak();
  }
}
