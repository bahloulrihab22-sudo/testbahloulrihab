import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItem } from './game-item';

describe('GameItem', () => {
  let component: GameItem;
  let fixture: ComponentFixture<GameItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameItem],
    }).compileComponents();

    fixture = TestBed.createComponent(GameItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('game', {
      id: 'er7', name: 'Lego', image: 'games/Lego.jpg',
      price: 63.4, salePrice: 63.4, forBablies: false, nbSales: 2530,
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reflect whether the game is for babies', async () => {
    const checkbox = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fixture.componentRef.setInput('game', { ...component.game(), forBablies: true });
    await fixture.whenStable();
    expect(checkbox.checked).toBe(true);
  });
});
