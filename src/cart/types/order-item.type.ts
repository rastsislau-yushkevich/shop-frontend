export interface OrderItem {
	id: string;
	quantity: number;
	bundlePrice: number;
	available: number | null;
	productId: string;
	orderId?: string;
	product: any;
}