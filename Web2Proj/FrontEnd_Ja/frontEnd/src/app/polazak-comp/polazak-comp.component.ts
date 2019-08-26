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
  tipDana: TipDana;

  polazakInfo: Polasci = {
    Linija: new Linija,
    Vreme: "",
    TipDana: TipDana.RadniDan
  }

  constructor(private polasciServis: PolasciService, private linijaServis: LinijaService) { }
  lines : Linija[];
  ngOnInit() {
   this.linijaServis.getLinija();
  }

  addPolazak(): void{
    this.polazakInfo.Linija.Naziv = this.naziv;
    this.polazakInfo.TipDana = this.tipDana;
    this.polasciServis.addPolazak(this.polazakInfo).subscribe(() => this.dodata = "Polazak je uspesno dodat.")
  }
}
