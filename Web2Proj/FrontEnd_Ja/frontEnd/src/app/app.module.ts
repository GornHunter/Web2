import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ToastrModule } from 'ngx-toastr';

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
import { LogoutComponent } from './logout/logout.component';
import { DetaljiKorisnikComponent } from './detalji-korisnik/detalji-korisnik.component';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { DodajStavkaComponent } from './dodaj-stavka/dodaj-stavka.component';
import { PrikazCenaComponent } from './prikaz-cena/prikaz-cena.component';

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
    LogovanjeCompComponent,
    LogoutComponent,
    DetaljiKorisnikComponent,
    CenovnikComponent,
    DodajStavkaComponent,
    PrikazCenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ShowHidePasswordModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
