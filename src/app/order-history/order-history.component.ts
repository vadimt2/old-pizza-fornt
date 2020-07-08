import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { IOrder } from '../Interfaces/iorder';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  showHistory:boolean = false;
  searchValue:string = '';
  orderHistory:IOrder[] = [];
  search:boolean = false;

  constructor(private orderservice: OrderService) { }
  ngOnInit(): void {
    console.log(this.showHistory)
  }

 searchOrderHistory(email:string){
   if(email === ''){
     return;
   }
   this.search = true;
   this.orderservice.getOrderHistory(email).subscribe((data:any) => {
     if(data){


       console.log(data);
       this.orderHistory = data;
       this.search = false;
       if(data.length < 1){
        this.search = true;
      }
  
       this.searchValue = '';
       return;
     }

   });
 }
}
