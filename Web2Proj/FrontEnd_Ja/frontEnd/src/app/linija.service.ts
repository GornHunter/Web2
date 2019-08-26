import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Linija, TipVoznje } from './linija';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LinijaService {

  private linijaUrl = 'http://localhost:52295/api/Linija/';

  listaLinija: Linija[];

  linijaInfo: Linija = {
    Naziv: "",
    TipVoznje: TipVoznje.Gradski
  };

  message: string = "";

  constructor(private http: HttpClient) { }

  addLinija(lin: Linija){
    return this.http.post(this.linijaUrl+'PostLinija', lin, httpOptions);
  }

  getLinija() {
    this.http.get(this.linijaUrl+'GetLinija').toPromise().then(rez => this.listaLinija = rez as Linija[]);
  }

  getLinijaId(id: number){
    this.http.get(this.linijaUrl+'GetLinijaId/'+id).toPromise().then(rez => this.linijaInfo = rez as Linija);
  }

  izbrisiLiniju(id: number){
    this.http.delete(this.linijaUrl+'DeleteLinija/'+id).subscribe((data:string) => this.message = data);
  }

  sacuvajIzmene(lin: Linija){
    return this.http.post(this.linijaUrl+'AzurirajLiniju', lin, httpOptions);
  }
}
