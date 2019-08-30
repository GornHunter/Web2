import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik, TipKorisnika } from './kosrisnik';
import { LogovanjeZahtev } from './logovanjeZahtev';
import { Logovanje } from './logovanje';
import { Cenovnik } from './cenovnik';
import { TipKarte } from './karta';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  private registracijaUrl = 'http://localhost:52295/api/Register/';

  cena: string = "";
  cenaIzmena: Cenovnik = {
    TipKarte: TipKarte.Vremenska,
    TipKorisnika: TipKorisnika.Djak,
    Cena: ""
  }

  log: LogovanjeZahtev = {
    Poruka: "",
    Neregistrovan: true,
    LogovanKorisnik: false,
    LogovanAdmin: false,
    KorisnikDetalji: new Korisnik
  }

  listStavke: Cenovnik[];

  constructor(private http: HttpClient) { }

  addKorisnik(korisnik: Korisnik){
    return this.http.post(this.registracijaUrl+'PostKorisnik', korisnik);
  }

  getKorisnik(log: Logovanje){
    this.http.get(this.registracijaUrl+'Logovanje?email='+log.Email+'&lozinka='+log.Lozinka).toPromise().then((data:LogovanjeZahtev) => this.log = data as LogovanjeZahtev);
  }

  updateKorisnik(korisnik: Korisnik){
    return this.http.post(this.registracijaUrl+'AzurirajKorisnika', korisnik);
  }

  addStavka(cenovnik: Cenovnik){
    return this.http.post(this.registracijaUrl+'DodajStavku', cenovnik);
  }

  getStavke(){
    this.http.get(this.registracijaUrl+'GetStavke').toPromise().then(rez => this.listStavke = rez as Cenovnik[]);
  }

  getSpecificnaStavka(cenovnik: Cenovnik){
    this.http.get(this.registracijaUrl+'GetSpecificnaStavka?tipKarte='+cenovnik.TipKarte+'&tipKorisnika='+cenovnik.TipKorisnika).toPromise().then((data:string) => this.cena = data as string);
  }

  getStavkaId(id: number){
    this.http.get(this.registracijaUrl+'GetStavkaId/'+id).toPromise().then((data:Cenovnik) => this.cenaIzmena = data as Cenovnik);
  }

  sacuvajIzmene(cen: Cenovnik){
    return this.http.post(this.registracijaUrl+'AzurirajStavku', cen);
  }
}
