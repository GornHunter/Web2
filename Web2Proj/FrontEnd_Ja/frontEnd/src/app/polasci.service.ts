import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Polasci, TipDana } from './polasci';
import { Linija } from './linija';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PolasciService {

  listPolazak: Polasci[];

  private polasciUrl = 'http://localhost:52295/api/Polasci/';

  message: string = "";

  polazakInfo: Polasci = {
    Linija: new Linija,
    Vreme: "",
    TipDana: TipDana.RadniDan
  }

  constructor(private http: HttpClient) { }

  addPolazak(pol: Polasci){
    return this.http.post(this.polasciUrl+'PostPolazak', pol);
  }

  getPolazak(){
    this.http.get(this.polasciUrl+'GetAllPolasci').toPromise().then(rez => this.listPolazak = rez as Polasci[]);
  }

  getPolazakId(id: number){
    this.http.get(this.polasciUrl+'GetPolazakId/'+id, httpOptions).toPromise().then(rez => this.polazakInfo = rez as Polasci);
  }

  izbrisiPolazak(id: number){
    this.http.delete(this.polasciUrl+'IzbrisiPolazak/'+id, httpOptions).subscribe((data:string) => this.message = data);
  }

  izmeniPolazak(id: number){
    this.http.post(this.polasciUrl+''+id, httpOptions);
  }

  sacuvajIzmene(pol: Polasci){
    return this.http.post(this.polasciUrl+'AzurirajPolazak', pol, httpOptions);
  }
}
