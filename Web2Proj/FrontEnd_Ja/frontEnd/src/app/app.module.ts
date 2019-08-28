import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedVoznjeComponent } from './red-voznje/red-voznje.component';
import { KupovinaKarteComponent } from './kupovina-karte/kupovina-karte.component';
import { LinijaCompComponent } from './linija-comp/linija-comp.component';
import { PolazakCompComponent } from './polazak-comp/polazak-comp.component';
import { PrikazLinijaComponent } from './prikaz-linija/prikaz-linija.component';
import { PrikazPolazakaComponent } from './prikaz-polazaka/prikaz-polazaka.component';
import { RegistracijaCompComponent } from './registracija-comp/registracija-comp.component';
import { LogovanjeCompComponent } from './logovanje-comp/logovanje-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    KupovinaKarteComponent,
    RedVoznjeComponent,
    LinijaCompComponent,
    PolazakCompComponent,
    PrikazLinijaComponent,
    PrikazPolazakaComponent,
    RegistracijaCompComponent,
    LogovanjeCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
