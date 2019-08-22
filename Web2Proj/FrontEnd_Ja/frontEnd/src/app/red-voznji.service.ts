import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voznje } from './voznje';


@Injectable({
  providedIn: 'root'
})
export class RedVoznjiService {

  private voznjaUrl = 'http://localhost:52295/api/RedVoznje';

  listaVoznji: Voznje[];

  redoviVoznje: Voznje = {
    dan: "",
    linija: "",
    polasci: []
  };

  constructor(private http: HttpClient) { }

  getVoznje() {
    this.http.get(this.voznjaUrl+'/GetVoznje?dan='+this.redoviVoznje.dan+'&linija='+this.redoviVoznje.linija).toPromise().then(rez => this.listaVoznji = rez as Voznje[]);
  }
}
