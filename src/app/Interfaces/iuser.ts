import { IRole } from './irole';
import { IOrder } from './iorder';

export interface IUser {
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
