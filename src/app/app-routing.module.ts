import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { HomeComponent } from './home/home.component';
import { JuegosMenuComponent } from './juegos-menu/juegos-menu.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { InfoComponent } from './info/info.component';
import { VersionComponent } from './version/version.component';
import { MemoriaComponent } from './memoria/memoria.component';

const routes: Routes = [
  {
    path: 'juegos', 
    component: JuegosMenuComponent,
  },
  {
    path:'inicio',
    component:HomeComponent,
  },
  {
    path: 'juegos/juego',
    component: JuegoComponent,
  },
  {
    path: 'juegos/ahorcado',
    component: AhorcadoComponent,
  },
  {
    path: 'juegos/memory',
    component: MemoriaComponent,
  },
  {
    path: 'version',
    component:VersionComponent,
  },
  {
    path: 'informacion',
    component: InfoComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
