import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DISHES } from '../../../data/dishes';

interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-bestdish',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bestdish.html',
  styleUrls: ['./bestdish.css']
})
export class BestDish {
  bestDishes: Dish[] = []; 

  constructor() {
  this.bestDishes = DISHES.filter(d => d.available).slice(0, 6);
}


  private getRandomDishes(dishes: Dish[], count: number): Dish[] {
    const shuffled = [...dishes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
