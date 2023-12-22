import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { toggleOpen } = cartSlice.actions