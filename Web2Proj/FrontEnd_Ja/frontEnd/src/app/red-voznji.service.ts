import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipVoznje, Linija } from './linija';
import { PolasciZahtev, TipDana, Polasci } from './polasci';


@Injectable({
  providedIn: 'root'
})
export class RedVoznjiService {

  private voznjaUrl = 'http://localhost:52295/api/Linija/';

  private polasciUrl = 'http://localhost:52295/api/Polasci/';

  listaLinija: Linija[];

  listPolazaka: Polasci[];

  constructor(private http: HttpClient) { }

  /*getVoznje() {
    this.http.get(this.voznjaUrl+'/GetVoznje?dan='+this.redoviVoznje.dan+'&linija='+this.redoviVoznje.linija).toPromise().then(rez => this.listaVoznji = rez as Voznje[]);
  }*/

  getLinija(id: number){
    this.http.get(this.voznjaUrl+'GetTipLinije/'+id).toPromise().then(rez => this.listaLinija = rez as Linija[]);
  }

  getPolasci(rv: PolasciZahtev){
    this.http.get(this.polasciUrl+'GetPolasci?naziv='+rv.LinijaIme+'&tipDana='+rv.TipDana).toPromise().then(rez => this.listPolazaka = rez as Polasci[]);
  }
}
