import { Component, OnInit } from '@angular/core';
import { GetCurrencyService } from '../services/get-currency/get-currency.service';

@Component({
  selector: 'app-confirmation-order',
  templateUrl: './confirmation-order.component.html',
  styleUrls: ['./confirmation-order.component.scss']
})
export class ConfirmationOrderComponent implements OnInit {
  getCartInfo:any = null;
  euro:number = null;

  constructor(private getCurrencyService:GetCurrencyService) { }

  ngOnInit(): void {
    this.getCurrencyService.getEuroCurr().subscribe(data => {
      if(data.quotes.USDEUR){
        this.euro = data.quotes.USDEUR;
      }
    });

      this.getCartInfo = history.state.data;
      console.log(this.getCartInfo.data.confirmationNumber);
  }

}
