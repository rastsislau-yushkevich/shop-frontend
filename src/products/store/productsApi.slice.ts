import { apiSlice } from "apiSlice";
import { ProductDto } from "products/types/product.dto";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductDto[] | undefined, any>({
      query: ({page, perPage}) => ({
        url: `/products?page=${page}&perPage=${perPage}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetProductsQuery } = productsApiSlice