import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  
  jugadorActual = 1;
  mapa: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mensajeTurno: string = 'Turno del Jugador 1';
  ganador: number = 0;
  MensajeGanador: boolean = false;

  seleccionar(celda: number) {
    if (!this.ganador && this.mapa[celda] === 0) {
      this.mapa[celda] = this.jugadorActual;
      this.jugadorActual = this.jugadorActual === 1 ? 2 : 1;
      this.actualizarMensajeTurno();
      this.verificarTresEnRaya();
    }
  }
  obtenerContenidoCelda(celda: number) {
    if (this.mapa[celda] === 0) {
      return '';
    } else if (this.mapa[celda] === 1) {
      return 'X';
    } else if (this.mapa[celda] === 2) {
      return 'O';
    } else {
      return '';
    }
  }

  actualizarMensajeTurno() {
    this.mensajeTurno = this.jugadorActual === 1 ? 'Turno del Jugador 1' : 'Turno del Jugador 2';
  }

  verificarTresEnRaya(){
    for (let i = 0; i < 9; i += 3) {
      if (this.mapa[i] !== 0 && this.mapa[i] === this.mapa[i + 1] && this.mapa[i] === this.mapa[i + 2]) {
        this.ganador = this.mapa[i];
        this.MensajeGanador = true;
        return;
      }
    }

    
    for (let i = 0; i < 3; i++) {
      if (this.mapa[i] !== 0 && this.mapa[i] === this.mapa[i + 3] && this.mapa[i] === this.mapa[i + 6]) {
        this.ganador = this.mapa[i];
        this.MensajeGanador = true;
        return;
      }
    }

    
    if (this.mapa[0] !== 0 && this.mapa[0] === this.mapa[4] && this.mapa[0] === this.mapa[8]) {
      this.ganador = this.mapa[0];
      this.MensajeGanador = true;
      return;
    }
    if (this.mapa[2] !== 0 && this.mapa[2] === this.mapa[4] && this.mapa[2] === this.mapa[6]) {
      this.ganador = this.mapa[2];
      this.MensajeGanador = true;
      return;
    }

    
    this.ganador = 0;
  }
  obtenerColorCelda(celda: number) {
    if (this.mapa[celda] === 1) {
      return '#fbe4cb'; 
    } else if (this.mapa[celda] === 2) {
      return '#b4b294'; 
    } else {
      return 'black'; 
    }
  }
  reStart() {
    for (let i = 0; i < 9; i++) {
      this.mapa[i] = 0;
    }
    this.jugadorActual = 1;
    this.mensajeTurno = 'Turno del Jugador 1';
    this.ganador = 0;
    this.MensajeGanador = false;
  }




}
