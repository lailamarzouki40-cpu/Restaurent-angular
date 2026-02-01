import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersCollectionRef;   // For writing
  private ordersCollectionQuery; // For reading

  constructor(private firestore: Firestore) {
    // CollectionReference for writing
    this.ordersCollectionRef = collection(this.firestore, 'orders');
    // Query for reading
    this.ordersCollectionQuery = query(this.ordersCollectionRef);
  }

  // Add order
  addOrder(order: any) {
    return addDoc(this.ordersCollectionRef, order);
  }

  // Get orders
  getOrders(): Observable<any[]> {
    return collectionData(this.ordersCollectionQuery, { idField: 'id' });
  }

  // Delete order
  deleteOrder(orderId: string) {
    const orderDocRef = doc(this.firestore, `orders/${orderId}`);
    return deleteDoc(orderDocRef);
  }
}
