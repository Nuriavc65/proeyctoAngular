import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Snake } from '../game-engine/snake';
import { Food } from '../game-engine/food';
import { outsideGrid } from '../game-engine/gameboard-grid.util';

@Component({
  selector: 'app-serpiente',
  templateUrl: './serpiente.component.html',
  styleUrls: ['./serpiente.component.css']
})
export class SerpienteComponent  implements OnInit,AfterViewInit {

  lastRenderTime = 0;
  gameOver = false;
  gameBoard: any;
  Snake_speed =1;
  snake = new Snake();
  food = new Food (this.snake);
  constructor(){}

  ngOnInit(): void {
    this.snake.listenToInputs();
  }
  ngAfterViewInit(){
    this.gameBoard = document.querySelector('.serpiente');
    window.requestAnimationFrame(this.start.bind(this));
  }

  start(currentTime: any){
    if(this.gameOver) return console.log('Game Over');

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender  = (currentTime - this.lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / this.snakeSpeed)return;
    this.lastRenderTime = currentTime;
    this.update();
    this.draw();
  }

  get snakeSpeed(){
    const score = this.food.currentScore;
    if(score < 10) return 4;
    if(score > 10 &&  score < 15 ) return 5;
    if(score > 15 && score < 20 ) return 6;
    return 7;
  }
  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }
  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }
  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if(!this.gameOver) return;
    this.gameBoard.classList.add("blur");
  }

  restart() {
    window.location.reload();
  }
}
