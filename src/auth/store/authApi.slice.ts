import { apiSlice } from "apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation({
      query: formData => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: { ...formData }
      })
    }),
    signOut: builder.mutation<any, void>({
      query: () => ({
        url: '/auth/sign-out',
        method: 'POST'
      })
    }),
    signUp: builder.mutation({
      query: formData => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: { ...formData }
      })
    })
  })
})

export const { useSignInMutation, useSignOutMutation, useSignUpMutation } = authApiSlice