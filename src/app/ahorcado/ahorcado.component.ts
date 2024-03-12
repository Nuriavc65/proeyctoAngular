import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit{
  squares: string[] = [];
  xIsNext: boolean = true;
  winner: string = 'X';
  machine: number = 0;
  full: boolean = false;
  name: string ="";

  constructor(){
  }
  
  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = this.calculateWinner();
    this.machine = Math.floor(Math.random() * this.squares.length);
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      if (this.calculateWinner() == 'none') {
        this.machine = Math.floor(Math.random() * this.squares.length);
        while (this.squares[this.machine]) {
          this.machine = Math.floor(Math.random() * this.squares.length);
        }
        this.squares.splice(this.machine, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
    }

    this.winner = this.calculateWinner();

  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    this.full = true;
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i] == null) {
        this.full = false;
      }
    }
    return this.full ? 'drow' : 'none';
  }




}
