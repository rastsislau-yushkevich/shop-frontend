import { apiSlice } from 'apiSlice';
import { Order } from 'cart/types/order.type';

export const historyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query<Order[] | undefined, void>({
      query: () => ({
        url: '/orders/history',
        method: 'GET',
      }),
      providesTags: ['Orders'],
    }),
  }),
});

export const { useGetHistoryQuery } = historyApiSlice;
