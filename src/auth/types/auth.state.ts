import { User } from "users/types/user.type";
import { Auth, AuthDto } from "./auth.dto";

export interface AuthState {
  tokens: Auth,
  user: User | null
}