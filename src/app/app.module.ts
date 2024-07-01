import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumVetrinaComponent } from './components/album-vetrina/album-vetrina.component';
import { PreviewComponent } from './components/preview/preview.component';
import { HomeComponent } from './components/home/home.component';
import { FotoComponent } from './components/foto/foto.component';
import { FotoVetrinaComponent } from './components/foto-vetrina/foto-vetrina.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DettaglioComponent,
    HeaderComponent,
    AlbumVetrinaComponent,
    PreviewComponent,
    HomeComponent,
    FotoComponent,
    FotoVetrinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
