import { HttpHeaders } from '@angular/common/http';

export const environment = {
  api:"https://demo-pizza-api.herokuapp.com/api/",
  production: false,
  // api: "http://localhost:61307/api/"
};

export const endPoint = {
  items: "items",
  shipping: "shipping",
  order: "order"
};


export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};