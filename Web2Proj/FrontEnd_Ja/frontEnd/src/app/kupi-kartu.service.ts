import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Karta } from './karta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KupiKartuService {

  private kartaUrl = 'http://localhost:52295/api/KupovinaKarte';

  constructor(private http: HttpClient) { }

  addKartaNeregistrovani (){
    let xy = "Vremenska";
    return this.http.post(this.kartaUrl+'/PostKarta', '"' + xy + '"', httpOptions);
  }
}
