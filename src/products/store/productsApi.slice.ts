import { apiSlice } from "apiSlice";
import { ProductDto } from "products/types/product.dto";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductDto[] | undefined, void>({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    })
  })
})

export const { useGetProductsQuery } = productsApiSlice