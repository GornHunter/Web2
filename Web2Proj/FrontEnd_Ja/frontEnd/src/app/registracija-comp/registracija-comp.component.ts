import { Component, OnInit } from '@angular/core';
import { Korisnik, TipKorisnika } from '../kosrisnik';
import { RegistracijaService } from '../registracija.service';

@Component({
  selector: 'app-registracija-comp',
  templateUrl: './registracija-comp.component.html',
  styleUrls: ['./registracija-comp.component.css']
})
export class RegistracijaCompComponent implements OnInit {

  mes: string = "";
  lozinka: string = "";
  dodat: boolean = false;
  slika: string = "";

  korisnikInfo: Korisnik = {
    Email: "",
    Ime: "",
    Prezime: "",
    Lozinka: "",
    DatumRodjenja: "",
    Adresa: "",
    TipKorisnika: TipKorisnika.Djak,
    Slika: ""
  }

  constructor(private servisKorisnik: RegistracijaService) { }

  ngOnInit() {
  }

  onChange($event) : void{
    var file : File = $event.target.files[0]
    var reader : FileReader = new FileReader()

    reader.onloadend = (e) =>{
      this.slika = <string>reader.result
    }
    reader.readAsDataURL(file)
  }

  addKorisnik(korisnik: Korisnik){
    this.korisnikInfo.Slika = this.slika;
    this.dodat = true;
    this.servisKorisnik.addKorisnik(korisnik).subscribe((data:string) => this.mes = data);
  }
}
