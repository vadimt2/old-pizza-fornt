import { Component } from '@angular/core';
import { ProductService } from './Services/Products/product.service';
import { CartService } from './Services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientPizzaProj';

  products: any = [];

  constructor() {}

  ngOnInit() {

  }
}
