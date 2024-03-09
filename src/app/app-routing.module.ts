import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'juegos', 
    component: JuegoComponent,
  },
  {
    path:'inicio',
    component:HomeComponent,
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
