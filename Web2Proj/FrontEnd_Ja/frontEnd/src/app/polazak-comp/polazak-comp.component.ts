import { Component, OnInit } from '@angular/core';
import { Polasci, TipDana } from '../polasci';
import { PolasciService } from '../polasci.service';
import { LinijaService } from '../linija.service';
import { Linija } from '../linija';

@Component({
  selector: 'app-polazak-comp',
  templateUrl: './polazak-comp.component.html',
  styleUrls: ['./polazak-comp.component.css']
})
export class PolazakCompComponent implements OnInit {

  private dodata = "";

  naziv: string = "";

  polazakInfo: Polasci = {
    Linija: new Linija,
    Vreme: "",
    TipDana: TipDana.RadniDan
  }

  constructor(private polasciServis: PolasciService, private linijaServis: LinijaService) { }
  lines : Linija[];
  ngOnInit() {
   this.linijaServis.getLinija();
   //this.linijaServis.getLinijaSub().subscribe((data:Linija[]) => {this.lines = data;})
   //console.log(this.lines);
  }

  addPolazak(): void{
    this.polazakInfo.Linija.Naziv = this.naziv;
    console.log(this.polazakInfo.Linija.Naziv);
    this.polasciServis.addPolazak(this.polazakInfo).subscribe(() => this.dodata = "Polazak je uspesno dodat.")
  }
}
