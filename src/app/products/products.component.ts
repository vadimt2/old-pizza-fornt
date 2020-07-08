import { Component, OnInit, Renderer2, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { GetCurrencyService } from '../services/get-currency/get-currency.service';
import { ProductService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = []


  constructor(private productService:ProductService , private cartService: CartService,
    private getCurrencyService: GetCurrencyService) {
    
  }

  
  ngOnInit(): void {
    
    this.productService.get().subscribe((data:IProduct[]) => {
      this.products = data;
      // --- Euro
      this.getCurrencyService.mapToEuroPrice(this.products);
      // --- Euro End
      if(this.cartService.orders){
        this.products.map(item => {
          let itemInOrder = this.cartService.orders.find(order => order.id == item.id);
         if(itemInOrder){
         item.quantity = itemInOrder.quantity;
         }       

        });
      };
    });

    console.log(this.products)
   // this.getCurrencyService.mapToEuroPrice(this.products);
    if(this.cartService.orders){
      this.products.map(item => {
        let itemInOrder = this.cartService.orders.find(order => order.id == item.id);
       if(itemInOrder){
       item.quantity = itemInOrder.quantity;
       }       

      });
    };

  }

  addToCart(product) {
    this.cartService.addToCart(product);
    }
  
  
    removeFromCart(product){
       this.cartService.removeQuantityFromCart(product);
    }
  
  
  getQuantity(product) {
    return this.cartService.getQuantity(product);
  }


}
