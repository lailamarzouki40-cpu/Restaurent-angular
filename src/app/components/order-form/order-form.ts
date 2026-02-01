import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Dish } from '../../model/dish';
import { OrderService } from '../../services/order';
import { DISHES } from '../../data/dishes';
import { Location } from '@angular/common';


@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order-form.html',
  styleUrls: ['./order-form.css']
})
export class OrderFormComponent implements OnInit {
  dish: Dish | undefined;
  step: number = 1;
  quantity: number = 1;
  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';
  notes: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
      private location: Location

  ) {}

  ngOnInit() {
    const dishId = Number(this.route.snapshot.paramMap.get('dishId'));
    if (!dishId) {
      console.error('No dishId provided in route');
      return;
    }

    // Find the dish in local array
    this.dish = DISHES.find(d => d.id === dishId);

    if (!this.dish) {
      console.error('Dish not found for id:', dishId);
    }
  }

  nextStep() { if (this.step < 3) this.step++; }
  prevStep() { if (this.step > 1) this.step--; }

  submitOrder() {
    if (!this.dish) {
      console.error('Cannot submit order: dish not selected');
      return;
    }

    const order = {
      dishId: this.dish.id,
      dishName: this.dish.name,
      quantity: this.quantity,
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      customerPhone: this.customerPhone,
      notes: this.notes,
      date: new Date()
    };

    this.orderService.addOrder(order)
      .then(() => {
        console.log('Order added:', order);
        this.router.navigate(['/orders']);
      })
      .catch(err => {
        console.error('Error adding order:', err);
      });
  }
  goBack() {
  if (window.history.length > 1) {
    this.location.back();
  } else {
    this.router.navigate(['/dishmenu']);
  }
}

}
