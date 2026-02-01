import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dish } from '../model/dish';

@Injectable({ providedIn: 'root' })
export class DishService {
  constructor(private firestore: Firestore) {}

  getDishes(): Observable<Dish[]> {
    const ref = collection(this.firestore, 'dishes');
    return collectionData(ref, { idField: 'id' }) as Observable<Dish[]>;
  }
}
