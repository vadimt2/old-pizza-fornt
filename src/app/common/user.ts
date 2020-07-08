import { IUser } from '../Interfaces/iuser';
import { IOrder } from '../Interfaces/iorder';
import { IRole } from '../Interfaces/irole';

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
