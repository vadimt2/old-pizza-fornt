import { NgModule, Input, Output } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: ProductsComponent },
{ path: 'cart', component: ShoppingCartComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'thank-you', component: ConfirmationOrderComponent },
{ path: 'order-history', component: OrderHistoryComponent },
{ path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
