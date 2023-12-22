export interface ProductDto {
  id: string;
  created_at?: number;
  updated_at?: number;
  name: string;
  image: string;
  price: number;
  quantityAvailable: number;
  description?: string;
}
