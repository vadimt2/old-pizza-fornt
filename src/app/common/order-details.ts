import { IOrderDetails } from '../Interfaces/iorder-details';
import { IOrder } from '../Interfaces/iorder';
import { IProduct } from '../Interfaces/iproduct';

export class OrderDetails implements IOrderDetails{
    id: number;
    orderId: number;
    order: IOrder;
    itemId: number;
    item: IProduct;
    sellPrice: number;
    quantity: number;
}
