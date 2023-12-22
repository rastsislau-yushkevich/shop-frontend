import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "apiSlice";
import { authSlice } from "auth/store/auth.slice";
import { cartSlice } from "cart/store/cart.slice";
import { usersSlice } from "users/store/users.slice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  cart: cartSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;