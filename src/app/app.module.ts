import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavComponent } from './Header/nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductService } from './Services/Products/product.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './Services/cart/cart.service';
import { GetCurrencyService } from './services/get-currency/get-currency.service';
import { ShippingService } from './services/shipping/shipping.service';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderService } from './services/order/order.service';
import { OrderHistoryComponent } from './order-history/order-history.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductsComponent,
    FooterComponent,
    ShoppingCartComponent,
    ConfirmationOrderComponent,
    CheckoutComponent,
    OrderHistoryComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ProductService, CurrencyPipe, CartService, GetCurrencyService, ShippingService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
