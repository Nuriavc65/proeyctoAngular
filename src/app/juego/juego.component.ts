import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  imagenes: String[]=[
    "assets/img/papel.png",
    "assets/img/rock.png",
    "assets/img/tijeras.png",
  ];
  mensaje:String = "-- selecione tu mano --";
  maquina:number = 0;
  vidaJugador:number = 5;
  vidaMaquina: number = 5;

  jugar(seleccionar:number){
    this.maquina = Math.floor(Math.random()*3) +1;
    
    switch(this.maquina){
      case 1:
        this.mensaje = seleccionar == 1 ? "Empate" : seleccionar == 2 ? "Jugador gana" : "Maquina gana";
        seleccionar == 1 ? "" : seleccionar == 2 ? this.vidaMaquina-- : this.vidaJugador--;
        break;
      case 2:
        this.mensaje = seleccionar == 2 ? "Empate" : seleccionar == 3 ? "Jugador gana" : "Maquina gana";
        seleccionar == 2 ? "" : seleccionar == 3 ? this.vidaMaquina-- : this.vidaJugador--;
        break;
      case 3:
        this.mensaje = seleccionar == 3 ? "Empate" : seleccionar == 1 ? "Jugador gana" : "Maquina gana";
        seleccionar == 3 ? "" : seleccionar == 1 ? this.vidaMaquina-- : this.vidaJugador--;
        break;
    }
  }
  reset(){
    this.vidaJugador = 5;
    this.vidaMaquina = 5;
  }
}
