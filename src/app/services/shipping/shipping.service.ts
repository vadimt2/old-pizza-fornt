import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment , endPoint} from '../../../environments/environment';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { IShipping } from 'src/app/Interfaces/ishipping';


@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http: HttpClient) { }


  get():Observable<IShipping[]>{
    return this.http.get<IShipping[]>(`${environment.api}${endPoint.shipping}`);
  }

  getById(id:number):Observable<IShipping>{
    return this.http.get<IShipping>(`${environment.api}${endPoint.shipping}${id}`);
  }

  inseret(shipping:IShipping):Observable<IShipping>{
    return this.http.post<IShipping>(`${environment.api}${endPoint.shipping}`, shipping);
  }

  delete(id:number):Observable<any>{
    return this.http.post<any>(`${environment.api}${endPoint.shipping}`,id);
  }

  update(shipping:IShipping):Observable<IShipping>{
    return this.http.put<IShipping>(`${environment.api}${endPoint.shipping}`, shipping);
  }
}