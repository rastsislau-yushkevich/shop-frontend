import { apiSlice } from "apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        url: '/products',
        method: 'GET'
      })
    })
  })
})

export const { useGetProductsQuery } = productsApiSlice