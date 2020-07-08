import { IOrderDetails } from '../interfaces/iorder-details';
import { IOrder } from '../interfaces/iorder';
import { IProduct } from '../interfaces/iproduct';

export class OrderDetails implements IOrderDetails{
    id: number;
    orderId: number;
    order: IOrder;
    itemId: number;
    item: IProduct;
    sellPrice: number;
    quantity: number;
}
