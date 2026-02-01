import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class Categories {

  categories = [
    { name: 'Moroccan', imageUrl: 'assets/categories/moroccan.jpg', nationality: 'moroccan' },
    { name: 'Italian', imageUrl: 'assets/categories/italian.jpg', nationality: 'italian' },
    { name: 'French', imageUrl: 'assets/categories/french.jpg', nationality: 'french' },
    { name: 'Korean', imageUrl: 'assets/categories/korean.jpg', nationality: 'korean' },
    { name: 'Indian', imageUrl: 'assets/categories/indian.jpg', nationality: 'indian' },
    { name: 'Turkish', imageUrl: 'assets/categories/turkish.jpg', nationality: 'turkish' },
    { name: 'Japanese', imageUrl: 'assets/categories/japanese.jpg', nationality: 'japanese' },
    { name: 'Mexican', imageUrl: 'assets/categories/mexican.jpg', nationality: 'mexican' },
  ];

}
