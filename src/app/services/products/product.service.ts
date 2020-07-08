import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IProduct } from 'src/app/Interfaces/iproduct';
import { endPoint, environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:IProduct[] = null;

  constructor(private http: HttpClient) { 
  }

  get():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.api}${endPoint.items}`);
  }

  getById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.api}${endPoint.items}/${id}`);
  }

  inseret(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.api}${endPoint.items}`, product);
  }

  delete(product:IProduct):Observable<any>{
    return this.http.post<any>(`${environment.api}${endPoint.items}`,product);
  }

  update(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`${environment.api}${endPoint.items}`, product);
  }
}