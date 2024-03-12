import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { JuegoComponent } from './juego/juego.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';

import { JuegosMenuComponent } from './juegos-menu/juegos-menu.component';
import {MatCardModule} from '@angular/material/card';
import { InfoComponent } from './info/info.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { VersionComponent } from './version/version.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { CeldasComponent } from './celdas/celdas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JuegoComponent,
    HomeComponent,
    JuegosMenuComponent,
    InfoComponent,
    MemoriaComponent,
    VersionComponent,
    AhorcadoComponent,
    CeldasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
