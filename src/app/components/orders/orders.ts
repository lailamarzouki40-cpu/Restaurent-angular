import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../services/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.html',
  styleUrls: ['./orders.css']
})
export class OrdersComponent {
  orders$: Observable<any[]>;

  constructor(private orderService: OrderService) {
    // Fetch orders
    this.orders$ = this.orderService.getOrders();
  }

  deleteOrder(orderId: string) {
    if (!confirm('Are you sure?')) return;
    this.orderService.deleteOrder(orderId)
      .then(() => console.log('Order deleted:', orderId))
      .catch(err => console.error(err));
  }

  // Add this to OrdersComponent
formatDate(date: any): string {
  if (!date) return '-';
  if (date.toDate) return date.toDate().toLocaleString();
  return new Date(date).toLocaleString();
}

}
