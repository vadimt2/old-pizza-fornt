import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/Products/product.service';
import { IProduct } from '../Interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';
import { concatMap, subscribeOn, map, filter } from 'rxjs/operators';
import { Product } from '../common/product';
import { CartService } from '../Services/cart/cart.service';
import { GetCurrencyService } from '../services/get-currency/get-currency.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  product: IProduct;
  products: IProduct[] = [];
  id: number;
  quantity: number = 0;
  quantityIncCart : number= 0;
  euro:number = null;

  constructor(private productSevice: ProductService,
     private route: ActivatedRoute,
     private cartService: CartService,
     private getCurrencyService:GetCurrencyService) {

  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.getCurrencyService.getEuroCurr().subscribe(data => {
      if(data.quotes.USDEUR){
        this.euro = data.quotes.USDEUR;
      }
    });

    this.productSevice.getById(this.id).pipe(map((data: IProduct) => {
      const getOrders = this.cartService.orders;
      if (getOrders.length > 0) {
        const orderItem = getOrders.find(x => x.id == data.id).quantity;
        if (orderItem && orderItem > 0) {
          data.quantity = this.cartService.orders.find(x => x.id == data.id).quantity;
          this.quantityIncCart = data.quantity;
          console.log(this.quantityIncCart)
        }
      }
      else {
        data.quantity = this.quantity;
      }
      this.product = data;
      console.log(this.product)
    })).subscribe();
  }

  removeFromCart(product) {
    this.cartService.removeQuantityFromCart(product);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  getQuantity(product) {
    return this.cartService.getQuantity(product);
  }

  setQuantity(product, quantity) {
    // this.cartService.setQuantity(product, quantity);
  }

}
