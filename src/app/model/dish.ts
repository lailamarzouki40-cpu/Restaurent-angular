// dish.model.ts
export interface Dish {
  id: number;
  name: string;
  category : string;
  description: string;
  price: number;
  nationality: string;
  imageUrl: string;
  available: boolean;
  receipt : string;
}
