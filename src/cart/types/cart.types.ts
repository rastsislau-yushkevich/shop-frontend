import { ProductDto } from "products/types/product.dto";

export interface CartProductProps {
  orderId: string,
  product: ProductDto,
  quantity: number
}