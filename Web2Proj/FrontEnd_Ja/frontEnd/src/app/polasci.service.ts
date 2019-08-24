import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Polasci } from './polasci';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PolasciService {

  private polasciUrl = 'http://localhost:52295/api/Polasci';

  constructor(private http: HttpClient) { }

  addPolazak(pol: Polasci){
    return this.http.post(this.polasciUrl+'/PostPolazak', pol);
  }
}
