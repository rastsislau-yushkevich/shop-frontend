import { RootState } from "store";

export const selectTokens = (state: RootState) => state.auth.tokens;
export const selectCurrentUser = (state: RootState) => state.auth.user;