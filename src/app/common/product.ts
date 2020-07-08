import { IProduct } from '../interfaces/iproduct';
import { ICategoryItems } from '../interfaces/icategory-items';

export class Product implements IProduct{
    id: number;
    price: number;
    title: string;
    priceInEuro: number;
    description: string;
    quantityInStock?: number;
    quantity?: number;
    available: boolean;
    discount?: number;
    categoryItems:ICategoryItems[];
    images: import("../interfaces/iimages").IImages[];
    total: number;
    parentItemId?: number;
    parentItem: IProduct;
    subItem: IProduct[];
}
