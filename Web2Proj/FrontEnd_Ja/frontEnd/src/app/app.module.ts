import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedVoznjeComponent } from './red-voznje/red-voznje.component';
import { KupovinaKarteComponent } from './kupovina-karte/kupovina-karte.component';
import { LinijaCompComponent } from './linija-comp/linija-comp.component';
import { PolazakCompComponent } from './polazak-comp/polazak-comp.component';
import { PrikazLinijaComponent } from './prikaz-linija/prikaz-linija.component';
import { PrikazPolazakaComponent } from './prikaz-polazaka/prikaz-polazaka.component';

@NgModule({
  declarations: [
    AppComponent,
    KupovinaKarteComponent,
    RedVoznjeComponent,
    LinijaCompComponent,
    PolazakCompComponent,
    PrikazLinijaComponent,
    PrikazPolazakaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
