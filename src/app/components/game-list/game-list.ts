import { Component ,signal} from '@angular/core';
import { Game } from '../../models/game';
import { GameItem } from '../game-item/game-item';
@Component({
  selector: 'rih-game-list',
  imports: [GameItem],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  games = signal<Game[]>([
    { id: "er7", name: 'Lego', image: 'Lego.jpg', price: 63.4, salePrice: 63.4, forBablies: false, nbSales: 2530 },
    { id: "te70", name: 'Téléphone', image: 'Tel.jpg', price: 42.6, salePrice: 42.6, forBablies: true, nbSales: 7850 },
    { id: "m45", name: 'Mario', image: 'Mario.jpg', price: 68.2, salePrice: 68.2, forBablies: false, nbSales: 14689 },
    { id: "c17", name: 'Cercles', image: 'Cercles.jpg', price: 20, salePrice: 20, forBablies: true, nbSales: 22675 }
  ]);

  mettreEnpromo(id: string): void {
    this.games.update(games => games.map(game =>
      game.id===id && game.salePrice===game.price
        ? { ...game,salePrice:Math.round(game.salePrice) / 1000 }
        : game
    ));
  }

}
