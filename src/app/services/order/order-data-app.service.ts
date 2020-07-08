import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/Interfaces/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderDataAppService {

 tempCartInfo = null

  constructor() { }

  saveCartInfo(tempCartInfo){
    this.tempCartInfo = tempCartInfo;
  }

}
