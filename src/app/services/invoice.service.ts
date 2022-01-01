import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.inteerface';
import { ResponseAPI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _http: HttpClient) { }

  getAllOrder(): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `order`);
  }

  createOrder(order: Order): Observable<ResponseAPI> {
    return this._http.post<ResponseAPI>(environment.ApiEndpoint + `order`, order);
  }
}
