import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { App } from './app/app';
import { Dishmenu } from './app/components/dishmenu/dishmenu';
import { DishDetail } from './app/components/dishdetail/dishdetail';
import { OrdersComponent } from './app/components/orders/orders';
import { Home } from './app/components/home/home';
import { About } from './app/components/home/about/about';
import { OrderFormComponent } from './app/components/order-form/order-form';

import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    provideRouter([
      { path: '', component: Home },
      { path: 'dish/:id', component: DishDetail },
      { path: 'orders', component: OrdersComponent },
      { path: 'dishmenu', component: Dishmenu },
      { path: 'about', component: About },
      { path: 'order/:dishId', component: OrderFormComponent },
      { path: '', redirectTo: '/dishmenu', pathMatch: 'full' }
    ])
  ]
});
