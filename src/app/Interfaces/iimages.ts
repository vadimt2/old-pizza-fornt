import { IProduct } from './iproduct';

export interface IImages {
     id:number;

     url:string;

     uploadedImage:number;

     itemId:number;

     item:IProduct[];
}