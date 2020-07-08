import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { GetCurrencyService } from './services/get-currency/get-currency.service';
import { ShippingService } from './services/shipping/shipping.service';
import { OrderService } from './services/order/order.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';





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
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
