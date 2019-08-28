import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { Logovanje } from '../logovanje';

@Component({
  selector: 'app-logovanje-comp',
  templateUrl: './logovanje-comp.component.html',
  styleUrls: ['./logovanje-comp.component.css']
})
export class LogovanjeCompComponent implements OnInit {

  log: Logovanje = {
    Email: "",
    Lozinka: ""
  };

  mes: string = "";
  ulogovan: boolean = false;

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
  }

  getKorisnik(log: Logovanje){
    this.ulogovan = true;
    this.servis.getKorisnik(log);
    this.mes = this.servis.log.Poruka;
  }
}
