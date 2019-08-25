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
  private lineChanged = new Subject<Linija[]>()

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

  getLinijaSub(){
    this.refreshLines();
    return this.lineChanged;
  }

  refreshLines(){
    this.http.get(this.linijaUrl+'GetLinija').subscribe((data:Linija[]) =>{
      this.lineChanged.next(data)
    })
  }

  izbrisiLiniju(id: number){
    this.http.delete(this.linijaUrl+'DeleteLinija/'+id).subscribe((data:string) =>{
      ok => this.message = data;
      error => this.message = data;
    });
  }

  sacuvajIzmene(lin: Linija){
    console.log('razvalio')
    return this.http.post(this.linijaUrl+'Update', lin, httpOptions);
    //console.log('zavrsio posao')
  }
}
