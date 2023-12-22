import { RootState } from "store";

export const selectIsCartOpen = (state: RootState) => state.cart.isOpen;