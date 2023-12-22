import { apiSlice } from "apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addToOrder: builder.mutation({
      query: body => ({
        url: '/orders/add-to-order',
        method: 'POST',
        body: { ...body }
      }),
      invalidatesTags: ['OrderItems'],
    }),
    getCart: builder.query<any, void>({
      query: () => ({
        url: '/orders/cart',
        method: 'GET'
      }),
      providesTags: ['OrderItems'],
    }),
    removeFromCart: builder.mutation({
      query: body => ({
        url: '/orders/remove-from-order',
        method: 'POST',
        body: {...body}
      }),
      invalidatesTags: ['OrderItems']
    }),
    submitOrder: builder.mutation<any, void>({
      query: () => ({
        url: '/orders/submit',
        method: 'POST',
      }),
      invalidatesTags: ['Orders'],
    }),
    deleteOrder: builder.mutation<any, void>({
      query: () => ({
        url: '/orders/clear-order',
        method: 'POST',
      }),
      invalidatesTags: ['OrderItems']
    }),
  })
})

export const { useAddToOrderMutation, useGetCartQuery, useLazyGetCartQuery, useRemoveFromCartMutation, useSubmitOrderMutation, useDeleteOrderMutation } = ordersApiSlice