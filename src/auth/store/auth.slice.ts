import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.tokens.accessToken = action.payload.access_token;
      state.tokens.refreshToken = action.payload.refresh_token;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeCredentials: (state) => {
      state.tokens = { accessToken: '', refreshToken: '' };
      state.user = null;
    }
  }
})

export const { setTokens, removeCredentials, setUser } = authSlice.actions;