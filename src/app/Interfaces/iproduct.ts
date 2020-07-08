import { ICategory } from './icategory';
import { IImages } from './iimages';
import { ICategoryItems } from './icategory-items';

export interface IProduct {
     id:number;

      price:number;

      title:string;

      priceInEuro:number;

      description:string;

      quantityInStock?:number;

      quantity?:number;

      available:boolean;

      discount?:number;

      categoryItems:ICategoryItems[];

      images:IImages[];

      total:number;

      parentItemId?:number;

      parentItem:IProduct

      subItem:IProduct[]
}
