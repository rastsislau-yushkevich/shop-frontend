import { apiSlice } from 'apiSlice';

export const historyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query<any, void>({
      query: () => ({
        url: '/orders/history',
        method: 'GET',
      }),
      providesTags: ['Orders'],
    }),
  }),
});

export const { useGetHistoryQuery } = historyApiSlice;
