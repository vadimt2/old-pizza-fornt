import { IOrder } from '../interfaces/iorder';
import { IShipping } from '../interfaces/ishipping';
import { IUser } from '../interfaces/iuser';
import { IOrderDetails } from '../interfaces/iorder-details';

export class Order implements IOrder {
    id: number;
    orderDate: Date;
    shippingId: number;
    shipping: IShipping;
    userId: number;
    user: IUser;
    confirmationNumber: string;
    total: number;
    note: string;
    tax: number;
    bellingAndShippInfo: import("../interfaces/ibelling-shipping-info").IBellingAndShippInfo[];
    OrderDetails: IOrderDetails[];

}
