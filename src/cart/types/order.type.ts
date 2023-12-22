import { OrderItem } from "./order-item.type";

export interface Order {
	id: string,
	total: number,
	status: string,
	userId: string,
	orderItems?: OrderItem[]
}