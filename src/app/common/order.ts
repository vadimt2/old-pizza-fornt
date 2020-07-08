import { IOrder } from '../Interfaces/iorder';
import { IShipping } from '../Interfaces/ishipping';
import { IUser } from '../Interfaces/iuser';
import { IOrderDetails } from '../Interfaces/iorder-details';

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
    bellingAndShippInfo: import("../Interfaces/ibelling-shipping-info").IBellingAndShippInfo[];
    OrderDetails: IOrderDetails[];

}
