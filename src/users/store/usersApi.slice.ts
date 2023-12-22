import { apiSlice } from "apiSlice";
import { User } from "users/types/user.type";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<User, void>({
      query: () => ({
        url: '/users/get-me',
        method: 'GET'
      })
    })
  })
})

export const { useLazyGetMeQuery } = usersApiSlice