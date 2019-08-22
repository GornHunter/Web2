import { Component, OnInit } from '@angular/core';
import { Voznje } from '../voznje';
import { RedVoznjiService } from '../red-voznji.service';

@Component({
  selector: 'app-red-voznje',
  templateUrl: './red-voznje.component.html',
  styleUrls: ['./red-voznje.component.css']
})
export class RedVoznjeComponent implements OnInit {

  tipVoznje: string = "";

  redoviVoznje: Voznje = {
    dan: "",
    linija: "",
    polasci: []
  };

  constructor(private serviceVoznje: RedVoznjiService) { }

  ngOnInit() {
    //this.service.getVoznje();
  }

  ispisPolazaka(){
    this.serviceVoznje.getVoznje();
  }
}
