import { Component } from '@angular/core';
import { Top } from "./top/top";
import {Categories } from "./categories/categories";
import { BestDish } from './bestdish/bestdish';

@Component({
  selector: 'app-home',
  imports: [Top, BestDish, Categories, Categories],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
