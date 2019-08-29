import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private servis: RegistracijaService) {}

  ngOnInit() {
    this.fun();
  }

  fun(){
    setTimeout(() => {
      this.servis.log.Poruka = "";
      this.servis.log.LogovanAdmin = false;
      this.servis.log.LogovanKorisnik = false;
    });
  }
}
