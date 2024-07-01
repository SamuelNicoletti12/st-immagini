import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { PreviewComponent } from './components/preview/preview.component';
import { AlbumVetrinaComponent } from './components/album-vetrina/album-vetrina.component';
import { HomeComponent } from './components/home/home.component';
import { ServiziService } from './services/servizi.service';
import { FotoComponent } from './components/foto/foto.component';

const routes: Routes = [
  {
    path: "album", component: AlbumVetrinaComponent
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "foto", component: FotoComponent
  },
  {
    path: "album/foto:id", component: FotoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
