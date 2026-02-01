import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../model/dish';
import { DISHES } from '../../data/dishes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dishmenu',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dishmenu.html',
  styleUrls: ['./dishmenu.css']
})
export class Dishmenu implements OnInit {

  dishes: Dish[] = [];
  filteredDishes: Dish[] = [];

  // 🔍 filters
  searchTerm: string = '';
  selectedNationality: string = 'all';
  onlyAvailable: boolean = false;
  maxPrice: number | null = null;

  nationalities: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dishes = DISHES;

    // get unique nationalities
    this.nationalities = [...new Set(this.dishes.map(d => d.nationality))];

    // read query param from Categories component
    this.route.queryParams.subscribe(params => {
      const nationality = params['nationality'];
      if (nationality) {
        this.selectedNationality = nationality;
      }
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredDishes = this.dishes.filter(dish => {

      const matchesSearch =
        dish.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesNationality =
        this.selectedNationality === 'all' ||
        dish.nationality.toLowerCase() === this.selectedNationality.toLowerCase();

      const matchesAvailability =
        !this.onlyAvailable || dish.available;

      const matchesPrice =
        this.maxPrice === null || dish.price <= this.maxPrice;

      return (
        matchesSearch &&
        matchesNationality &&
        matchesAvailability &&
        matchesPrice
      );
    });
  }

}
