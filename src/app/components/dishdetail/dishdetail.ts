import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Dish } from '../../model/dish';
import { Router } from '@angular/router';
import { DISHES } from '../../data/dishes'; // <-- import your hardcoded dishes
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dishdetail.html',
  styleUrls: ['./dishdetail.css']
})
export class DishDetail {
  
  dish: Dish | undefined;

  constructor(private route: ActivatedRoute, private router : Router, private location : Location) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dish = DISHES.find(d => d.id === id);
  }



goBack() {
  this.location.back();
}

}
