import { Component} from '@angular/core';

export type EditorType = 'redVoznje' | 'kupovinaKarte' | 'linija' | 'polazak' | 'prikazLinija';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "Buss App";

  editor: EditorType;

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

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
