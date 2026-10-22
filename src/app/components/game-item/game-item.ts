import { Component ,input, output} from '@angular/core';
import { Game } from '../../models/game';
import { SellsPipe } from '../../pipes/sells';

@Component({
  selector: 'rih-game-item',
  imports: [SellsPipe],
  templateUrl: './game-item.html',
  styleUrl: './game-item.css',
})
export class GameItem {
  game=input.required<Game>();
  promo=output<string>();
metpromo(){
  this.promo.emit(this.game().id);
}


  }
