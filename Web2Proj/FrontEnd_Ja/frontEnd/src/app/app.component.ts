import { Component} from '@angular/core';

export type EditorType = 'redVoznje' | 'kupovinaKarte' | 'linija' | 'polazak';

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

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
