import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { removeCredentials, setTokens } from 'auth/store/auth.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333',
  credentials: 'include',
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const aT = localStorage.getItem('access_token');
    const accessToken = JSON.parse(String(aT));
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log('sending refresh token');
    const rT = localStorage.getItem('refresh_token');
    const refreshToken = JSON.parse(String(rT));
    console.log(refreshToken)
    const refreshResult: any = await baseQuery({ url: '/auth/refresh', method: 'POST', body: {'refreshToken': `Bearer ${refreshToken}`}}, api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      api.dispatch(setTokens({ ...refreshResult.data }));
      localStorage.setItem('access_token', JSON.stringify(refreshResult.data.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(refreshResult.data.refresh_token))
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeCredentials());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['OrderItems', 'Orders'],
  endpoints: (builder) => ({}),
});
