import { Component, OnInit, NgZone, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/iproduct';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { GetCurrencyService } from '../services/get-currency/get-currency.service';
import { ShippingService } from '../services/shipping/shipping.service';
import { IShipping } from '../interfaces/ishipping';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderDataAppService } from '../services/order/order-data-app.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  euro?:number = null;
  products: IProduct[] = [];
  shippings: IShipping[] = [];
  shippingPrice : number = 0;
  shippingSelection : string = '';
  subTotal:number = 0;
  startOrderForm: FormGroup;
  
 constructor(private cartService:CartService,
  private getCurrencyService:GetCurrencyService,
  private shippingService: ShippingService,
  private orderDataAppService: OrderDataAppService,
  private router: Router) {   
 
}

 ngOnInit(): void {
  this.products = this.cartService.orders;
  this.getCurrencyService.mapToEuroPrice(this.products);

  this.shippingService.get().subscribe(data => {
    // console.log(data);
    this.shippings = data;

    // console.log(data);
  })

  this.getCurrencyService.getEuroCurr().subscribe(data => {
    if(data.quotes.USDEUR){
      this.euro = data.quotes.USDEUR;
    }
  })

  this.startOrderForm = new FormGroup({
    note: new FormControl(''),
    shipping: new FormControl('', Validators.required),
   
  });
 }


   removeFromCart(product){

     this.cartService.removeQuantityFromCart(product);
     
  }

 addToCart(product) {
  this.cartService.addToCart(product);
  }

  removeItem(product){
    
    this.cartService.removeItem(product);
  }

 getQuantity(productId) {
  let item = this.products.find(x => x.id == productId);
  item.quantity = this.cartService.getQuantity(productId);
  return item.quantity;
}

getSubTotal(){
  return this.cartService.getSubTotal();
}

getTotal(){
  return this.cartService.getSubTotal() + parseFloat(this.shippingPrice.toString());
}

onItemChange(price){
  this.shippingPrice = price;
}

onSubmit(form: FormGroup){
  // console.log('Valid?', form.valid); 
  this.shippingSelection = form.value.shipping.title;

  // console.log('Note', form.value.note);
  // console.log('Shipping', form.value.shipping);

  let data = {note: form.value.note, shipping: form.value.shipping}
  this.orderDataAppService.saveCartInfo(data);
  this.router.navigate(['/checkout'], { state:  { data } })
}
}