import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent {
  localStorageData:string | null | any = {result: {computer: 5, player: 5}}
  cards: Card[] = [];
  cardsVisible: Card[] = [];
  cardsMatched: Card[] = [];

  parent: Component | any = AppComponent

  user:any = JSON.parse(localStorage.getItem('user') || '{}')

  constructor() {
    this.initializeCards();
  }

  initializeCards() {
    const values = ['./../assets/img/sakura.png', './../assets/img/flower.png', './../assets/img/flowers.png', './../assets/img/floral-design.png', './../assets/img/pink-cosmos.png', './../assets/img/flower1.png'];
    values.forEach(value => {
      this.cards.push({ value: value, revealed: false });
      this.cards.push({ value: value, revealed: false });
    });
    this.shuffleCards();
    console.log(this.parent.errorTitle)
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  revealCard(card: Card) {
    if (this.cardsVisible.length == 2) {
      return;
    }
    if (!card.revealed) { 
      this.cardsVisible.push(card);
      card.revealed = true;
    }
    if (this.cardsVisible.length == 2) {
      if (this.cardsVisible[0].value != this.cardsVisible[1].value) {
        this.localStorageData.result.player -= 1
        this.waitOneSecond().then(() => { 
          this.cardsVisible.forEach(card => card.revealed = false);
          this.cardsVisible = [];
        });
      }else {
        this.cardsVisible = [];
        this.cardsMatched.push(this.cardsVisible[0]);
        this.cardsMatched.push(this.cardsVisible[1]);
      }
    }
  }

  waitOneSecond(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

 
  
}
interface Card {
  value: string;
  revealed: boolean;
}
