import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { TipDana } from '../polasci';
import { TipKorisnika, Korisnik } from '../kosrisnik';

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
      if(this.servis.log.LogovanAdmin){
        this.servis.log.Poruka = "";
        this.servis.log.Neregistrovan = true;
        this.servis.log.LogovanAdmin = false;
        this.servis.log.LogovanKorisnik = false;
        this.servis.log.KorisnikDetalji = new Korisnik;
    }
    else{
      this.servis.log.Poruka = "";
        this.servis.log.Neregistrovan = true;
        this.servis.log.LogovanAdmin = false;
        this.servis.log.LogovanKorisnik = false;
        this.servis.log.KorisnikDetalji.Email = "";
        this.servis.log.KorisnikDetalji.Ime = "";
        this.servis.log.KorisnikDetalji.Prezime = "";
        this.servis.log.KorisnikDetalji.Lozinka = "";
        this.servis.log.KorisnikDetalji.DatumRodjenja = "";
        this.servis.log.KorisnikDetalji.Adresa = "";
        this.servis.log.KorisnikDetalji.TipKorisnika = TipKorisnika.Djak;
        this.servis.log.KorisnikDetalji.Slika = "";
    }
    });
  }
}
