import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
   cartProductCount:number;

  constructor(private cartService:CartService) { }

  
  ngOnInit(): void {
    this.cartProductCount = 0;
    if(this.cartService.totalcartvalue > 0){
      this.cartProductCount = this.cartService.totalcartvalue;
    }
    this.cartService.totalSubject.subscribe((totalvalue : number)=>{


        this.cartProductCount = totalvalue;
    })
  }
}


