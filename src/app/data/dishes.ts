import { Dish } from '../model/dish';

export const DISHES: Dish[] = [
  // ===== ITALIAN =====
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Classic pizza with mozzarella, tomato, and basil.',
    price: 8.5,
    category: 'Meal',
    nationality: 'Italian',
    
    imageUrl: 'assets/italian/pizza.jpg',
    available: true,
    receipt: `Ingredients: Pizza dough, Tomato sauce, Mozzarella, Basil
Preparation: Preheat oven 220°C, spread sauce, add cheese & basil, bake 12-15 min`
  },
  {
    id: 2,
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with pancetta and parmesan.',
    price: 9.5,
    category: 'Meal',
    nationality: 'Italian',
    imageUrl: 'assets/italian/pasta.jpg',
    available: true,
    receipt: `Ingredients: Spaghetti, Pancetta, Eggs, Parmesan, Pepper
Preparation: Cook pasta, fry pancetta, mix eggs & parmesan, combine, serve`
  },
  {
    id: 3,
    name: 'Limoncello',
    description: 'Refreshing Italian lemon liqueur.',
    price: 4.5,
    category: 'Drink',
    nationality: 'Italian',
    imageUrl: 'assets/italian/limoncello.jpg',
    available: true,
    receipt: `Ingredients: Lemon zest, Alcohol, Sugar, Water
Preparation: Infuse zest 10 days, make syrup, mix & bottle`
  },

  // ===== FRENCH =====
  {
    id: 4,
    name: 'Coq au Vin',
    description: 'Classic French chicken stew in red wine.',
    price: 12.0,
    category: 'Meal',
    nationality: 'French',
    imageUrl: 'assets/french/coq-au-vin.jpg',
    available: true,
    receipt: `Ingredients: Chicken, Red wine, Mushrooms, Bacon, Onions
Preparation: Brown chicken & bacon, add veggies & wine, simmer 1-2 hrs`
  },
  {
    id: 5,
    name: 'Ratatouille',
    description: 'Vegetable stew with zucchini, eggplant, and tomato.',
    price: 9.0,
    category: 'Meal',
    nationality: 'French',
    imageUrl: 'assets/french/ratatouille.jpg',
    available: true,
    receipt: `Ingredients: Zucchini, Eggplant, Bell pepper, Tomato, Herbs
Preparation: Slice veggies, sauté with herbs, simmer until tender`
  },
  {
    id: 6,
    name: 'French Wine',
    description: 'Red or white wine from France.',
    price: 5.5,
    category: 'Drink',
    nationality: 'French',
    imageUrl: 'assets/french/french-wine.jpg',
    available: true,
    receipt: `Ingredients: Grapes
Preparation: Fermented grapes according to type`
  },

  // ===== KOREAN =====
  {
    id: 7,
    name: 'Bibimbap',
    description: 'Mixed rice with vegetables and spicy sauce.',
    price: 10.0,
    category: 'Meal',
    nationality: 'Korean',
    imageUrl: 'assets/korean/bibimbap.jpg',
    available: true,
    receipt: `Ingredients: Rice, Vegetables, Beef, Egg, Gochujang
Preparation: Cook rice, sauté vegetables, top with beef & egg, add sauce`
  },
  {
    id: 8,
    name: 'Kimchi Stew',
    description: 'Spicy stew with fermented cabbage and tofu.',
    price: 9.0,
    category: 'Meal',
    nationality: 'Korean',
    imageUrl: 'assets/korean/kimchi-stew.jpg',
    available: true,
    receipt: `Ingredients: Kimchi, Tofu, Pork, Garlic, Gochugaru
Preparation: Sauté pork & garlic, add kimchi & broth, simmer 20 min, add tofu`
  },
  {
    id: 9,
    name: 'Soju',
    description: 'Traditional Korean alcoholic drink.',
    price: 4.0,
    category: 'Drink',
    nationality: 'Korean',
    imageUrl: 'assets/korean/soju.jpg',
    available: true,
    receipt: `Ingredients: Rice, Barley, Sweet potato
Preparation: Distilled and bottled`
  },

  // ===== MOROCCAN =====
  {
    id: 10,
    name: 'Couscous',
    description: 'Steamed semolina with vegetables and meat.',
    price: 11.0,
    category: 'Meal',
    nationality: 'Moroccan',
    imageUrl: 'assets/moroccan/couscous.jpg',
    available: true,
    receipt: `Ingredients: Couscous, Chicken/Meat, Vegetables, Spices
Preparation: Steam couscous, cook meat & vegetables, serve together`
  },
  {
    id: 11,
    name: 'Tagine',
    description: 'Slow-cooked stew with meat and vegetables.',
    price: 12.0,
    category: 'Meal',
    nationality: 'Moroccan',
    imageUrl: 'assets/moroccan/tagine.jpg',
    available: true,
    receipt: `Ingredients: Meat, Onion, Carrots, Spices, Preserved lemon
Preparation: Layer ingredients in tagine, cook slowly 1-2 hrs`
  },
  {
    id: 12,
    name: 'Mint Tea',
    description: 'Sweet Moroccan green tea with fresh mint.',
    price: 2.5,
    category: 'Drink',
    nationality: 'Moroccan',
    imageUrl: 'assets/moroccan/mint-tea.jpg',
    available: true,
    receipt: `Ingredients: Green tea, Mint leaves, Sugar
Preparation: Brew tea, add mint & sugar`
  },

  // ===== INDIAN =====
  {
    id: 13,
    name: 'Butter Chicken',
    description: 'Creamy tomato chicken curry.',
    price: 11.5,
    category: 'Meal',
    nationality: 'Indian',
    imageUrl: 'assets/indian/butter-chicken.jpg',
    available: true,
    receipt: `Ingredients: Chicken, Butter, Tomato, Cream, Spices
Preparation: Cook chicken, add sauce ingredients, simmer 20 min`
  },
  {
    id: 14,
    name: 'Vegetable Biryani',
    description: 'Spiced rice with vegetables and herbs.',
    price: 10.0,
    category: 'Meal',
    nationality: 'Indian',
    imageUrl: 'assets/indian/biryani.jpg',
    available: true,
    receipt: `Ingredients: Basmati rice, Vegetables, Spices, Herbs
Preparation: Cook rice with vegetables & spices`
  },
  {
    id: 15,
    name: 'Mango Lassi',
    description: 'Refreshing yogurt and mango drink.',
    price: 3.5,
    category: 'Drink',
    nationality: 'Indian',
    imageUrl: 'assets/indian/mango-lassi.jpg',
    available: true,
    receipt: `Ingredients: Yogurt, Mango, Sugar, Cardamom
Preparation: Blend all ingredients until smooth`
  },

  // ===== TURKISH =====
  {
    id: 16,
    name: 'Kebap',
    description: 'Grilled meat skewers with spices.',
    price: 10.5,
    category: 'Meal',
    nationality: 'Turkish',
    imageUrl: 'assets/turkish/kebap.jpg',
    available: true,
    receipt: `Ingredients: Lamb or Beef, Spices
Preparation: Skewer meat, grill until cooked`
  },
  {
    id: 17,
    name: 'Manti',
    description: 'Turkish dumplings with yogurt sauce.',
    price: 9.0,
    category: 'Meal',
    nationality: 'Turkish',
    imageUrl: 'assets/turkish/manti.jpg',
    available: true,
    receipt: `Ingredients: Dough, Ground meat, Yogurt, Garlic, Spices
Preparation: Fill dough with meat, boil, serve with yogurt`
  },
  {
    id: 18,
    name: 'Ayran',
    description: 'Cold yogurt drink.',
    price: 2.5,
    category: 'Drink',
    nationality: 'Turkish',
    imageUrl: 'assets/turkish/ayran.jpg',
    available: true,
    receipt: `Ingredients: Yogurt, Water, Salt
Preparation: Mix ingredients, serve chilled`
  },

  // ===== JAPANESE =====
  {
    id: 19,
    name: 'Sushi Platter',
    description: 'Assortment of nigiri and maki sushi.',
    price: 15.0,
    category: 'Meal',
    nationality: 'Japanese',
    imageUrl: 'assets/japanese/sushi.jpg',
    available: true,
    receipt: `Ingredients: Sushi rice, Nori, Fish, Avocado, Cucumber
Preparation: Cook rice, slice fish & veggies, assemble rolls & nigiri`
  },
  {
    id: 20,
    name: 'Ramen Bowl',
    description: 'Noodle soup with broth, meat, and vegetables.',
    price: 11.0,
    category: 'Meal',
    nationality: 'Japanese',
    imageUrl: 'assets/japanese/ramen.jpg',
    available: true,
    receipt: `Ingredients: Noodles, Broth, Pork/Chicken, Egg, Vegetables
Preparation: Prepare broth, cook noodles, assemble with toppings`
  },
  {
    id: 21,
    name: 'Green Tea',
    description: 'Hot Japanese green tea.',
    price: 2.5,
    category: 'Drink',
    nationality: 'Japanese',
    imageUrl: 'assets/japanese/green-tea.jpg',
    available: true,
    receipt: `Ingredients: Green tea leaves
Preparation: Boil water, steep tea leaves 2-3 min`
  },

  // ===== MEXICAN =====
  {
    id: 22,
    name: 'Tacos',
    description: 'Soft corn tortillas with meat and toppings.',
    price: 9.0,
    category: 'Meal',
    nationality: 'Mexican',
    imageUrl: 'assets/mexican/tacos.jpg',
    available: true,
    receipt: `Ingredients: Corn tortillas, Beef/Chicken, Onion, Cilantro, Salsa
Preparation: Cook meat, fill tortillas, add toppings`
  },
  {
    id: 23,
    name: 'Enchiladas',
    description: 'Rolled tortillas with cheese and sauce.',
    price: 10.0,
    category: 'Meal',
    nationality: 'Mexican',
    imageUrl: 'assets/mexican/enchiladas.jpg',
    available: true,
    receipt: `Ingredients: Tortillas, Cheese, Sauce, Meat/Beans
Preparation: Fill tortillas, roll, bake with sauce & cheese`
  },
  {
    id: 24,
    name: 'Horchata',
    description: 'Sweet rice-based drink with cinnamon.',
    price: 3.0,
    category: 'Drink',
    nationality: 'Mexican',
    imageUrl: 'assets/mexican/horchata.jfif',
    available: true,
    receipt: `Ingredients: Rice, Milk, Sugar, Cinnamon
Preparation: Soak rice, blend, strain, add milk & sugar`
  }
];
