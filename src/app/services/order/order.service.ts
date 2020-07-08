import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from 'src/app/Interfaces/iorder';
import { Observable } from 'rxjs';
import { environment , endPoint} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private _getHeaders():Headers {
    let header = new Headers({
      'Content-Type': 'application/json'
    });
 
    return header;
 }

  get():Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${environment.api}${endPoint.order}`);
  }

  getById(id:number):Observable<IOrder>{
    return this.http.get<IOrder>(`${environment.api}${endPoint.order}/${id}`);
  }

  inseret(order:IOrder):Observable<IOrder>{
        return this.http.post<any>(`${environment.api}${endPoint.order}`,order);
  }

  delete(id:number):Observable<any>{
    return this.http.post<any>(`${environment.api}${endPoint.order}`,id);
  }

  update(order:IOrder):Observable<IOrder>{
    return this.http.put<IOrder>(`${environment.api}${endPoint.order}`, order);
  }

  getOrderHistory(email: string):Observable<IOrder>{
    return this.http.post<any>(`${environment.api}${endPoint.order}/orderHistory`,email);
  }
}
