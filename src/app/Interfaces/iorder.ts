import { IShipping } from './ishipping';
import { IUser } from './iuser';
import { IBellingAndShippInfo } from './ibelling-shipping-info';
import { IOrderDetails } from './iorder-details';

export interface IOrder {
   
     id:number;

     orderDate:Date;

     shippingId:number;

     shipping:IShipping;

     userId:number;

     user:IUser;

     confirmationNumber:string;

     total:number;

     note:string;

     tax:number;

     bellingAndShippInfo:IBellingAndShippInfo[];

     OrderDetails:IOrderDetails[];
     
}
