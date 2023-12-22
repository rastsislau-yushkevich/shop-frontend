import { apiSlice } from "apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      query: () => ({
        url: '/users/get-me',
        method: 'GET'
      })
    })
  })
})

export const { useLazyGetMeQuery } = usersApiSlice