import { Component } from '@angular/core';


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
