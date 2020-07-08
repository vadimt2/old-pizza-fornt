import { IUser } from '../interfaces/iuser';
import { IOrder } from '../interfaces/iorder';
import { IRole } from '../interfaces/irole';

export class User implements IUser{
    
         email:string;

         password:string;

         firstName:string;

         lastName:string;

         roleId :number;

         isRegistered:boolean;

         role:IRole;

         phone:string;

         orders:IOrder[];
}
