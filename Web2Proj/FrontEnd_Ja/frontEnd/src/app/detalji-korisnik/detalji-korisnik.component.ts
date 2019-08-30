import { Component, OnInit } from '@angular/core';
import { RegistracijaService } from '../registracija.service';
import { Korisnik } from '../kosrisnik';

@Component({
  selector: 'app-detalji-korisnik',
  templateUrl: './detalji-korisnik.component.html',
  styleUrls: ['./detalji-korisnik.component.css']
})
export class DetaljiKorisnikComponent implements OnInit {

  mes: string = "";
  sacuvan: boolean = false;
  tip: string = "";
  slika: string = "";
  fileData: File = null;

  constructor(private servis: RegistracijaService) { }

  ngOnInit() {
    if(this.servis.log.KorisnikDetalji.TipKorisnika == 0){
      this.tip = "Djak";
    }
    else if(this.servis.log.KorisnikDetalji.TipKorisnika == 1){
      this.tip = "Penzioner";
    }
    else{
      this.tip = "RegularniPutnik";
    }
  }

  onChange($event) : void{
    this.servis.log.KorisnikDetalji.Slika = '';
    var file : File = $event.target.files[0]
    var reader : FileReader = new FileReader()

    reader.onload = (e) =>{
      this.slika = <string>reader.result
    }
    reader.readAsDataURL(file)
  }

  updateKorisnik(korisnik: Korisnik){
    this.servis.log.KorisnikDetalji.Slika = this.slika;
    this.sacuvan = true;
    this.servis.updateKorisnik(korisnik).subscribe((data:string) => this.mes = data);
  }
}
