import { Component, OnInit } from '@angular/core';
import { LinijaService } from '../linija.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prikaz-linija',
  templateUrl: './prikaz-linija.component.html',
  styleUrls: ['./prikaz-linija.component.css']
})
export class PrikazLinijaComponent implements OnInit {

  constructor(private linijeServis: LinijaService) { }

  ngOnInit() {
  }

  ucitajLinije(){
    this.linijeServis.getLinija();
  }

  izbrisiLiniju(id: number){
    this.linijeServis.izbrisiLiniju(id);
  }
}
