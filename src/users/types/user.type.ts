import { Order } from "cart/types/order.type";

export interface User {
	id: string;
	created_at: number;
	updated_at: number;
	email: string;
	firstName?: string | null;
	lastName?: string | null;
	refreshToken?: string | null;
	orders?: Order[];
}