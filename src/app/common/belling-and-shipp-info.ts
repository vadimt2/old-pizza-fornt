import { IBellingAndShippInfo } from '../Interfaces/ibelling-shipping-info';
import { IOrder } from '../Interfaces/iorder';
import { BellingOrShipping } from './belling-or-shipping.enum';

export class BellingAndShippInfo implements IBellingAndShippInfo {
    iId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    address2: string;
    state: string;
    country: string;
    zip?: number;
    bellingOrShipping: BellingOrShipping;
    isTheSame: boolean;
    isSaved: boolean;
    orderId: number;
    order: IOrder;

}
