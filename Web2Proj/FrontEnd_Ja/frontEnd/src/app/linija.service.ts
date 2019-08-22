import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Linija } from './linija';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LinijaService {

  private linijaUrl = 'http://localhost:52295/api/Linija';

  constructor(private http: HttpClient) { }

  addLinija(lin: Linija){
    return this.http.post(this.linijaUrl+'/PostLinija', lin, httpOptions);
  }
}
