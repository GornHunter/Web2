import { Component} from '@angular/core';
import { RegistracijaService } from './registracija.service';
import { LogovanjeZahtev } from './logovanjeZahtev';

export type EditorType = 'redVoznje' | 'kupovinaKarte' | 'linija' | 'polazak' | 'prikazLinija'| 'prikazPolazaka'
                          | 'registrovanje' | 'logovanje' | 'izlogovanje' | 'detalji' | 'cenovnik' | 'dodajStavka' | 'prikaziCenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "Buss App";

  editor: EditorType;

  constructor(private servis: RegistracijaService) {}

  get showRedVoznje() {
    return this.editor === 'redVoznje';
  }

  get showKupovina() {
    return this.editor === 'kupovinaKarte';
  }

  get showLinija(){
    return this.editor === 'linija';
  }

  get showPolazak(){
    return this.editor === 'polazak';
  }

  get showPrikazLinija(){
    return this.editor === 'prikazLinija';
  }

  get showPrikazPolazaka(){
    return this.editor === 'prikazPolazaka';
  }

  get showRegistrovanje(){
    return this.editor === 'registrovanje';
  }

  get showLogovanje(){
    return this.editor === 'logovanje';
  }

  get showIzlogovanje(){
    return this.editor === 'izlogovanje';
  }

  get showDetalji(){
    return this.editor === 'detalji';
  }

  get showDodajStavka(){
    return this.editor === 'dodajStavka';
  }

  get showCenovnik(){
    return this.editor === 'cenovnik';
  }

  get showPrikaziCenu(){
    return this.editor === 'prikaziCenu';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
