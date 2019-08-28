import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from './kosrisnik';
import { LogovanjeZahtev } from './logovanjeZahtev';
import { Logovanje } from './logovanje';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  private registracijaUrl = 'http://localhost:52295/api/Register/';

  log: LogovanjeZahtev = {
    Poruka: "",
    LogovanKorisnik: false,
    LogovanAdmin: false
  }

  constructor(private http: HttpClient) { }

  addKorisnik(korisnik: Korisnik){
    return this.http.post(this.registracijaUrl+'PostKorisnik', korisnik);
  }

  getKorisnik(log: Logovanje){
    this.http.get(this.registracijaUrl+'Logovanje?email='+log.Email+'&lozinka='+log.Lozinka).toPromise().then((data:LogovanjeZahtev) => this.log = data as LogovanjeZahtev);
  }
}
