import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.interface';
import { ResponseAPI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProductsByTakeAndSkip(take: number, skip: number): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `product?take=${take}&skip=${skip}`);
  }

  getProductsByTake(take: number): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `product?take=${take}`);
  }

  getProducts(): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `product`);
  }

  createProduct(product: Product): Observable<any> {
    return this._http.post<any>(environment.ApiEndpoint + `product`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this._http.delete<any>(environment.ApiEndpoint + `product/${productId}`);
  }

  updateProduct(productId: number, product: Product): Observable<any> {
    return this._http.patch<any>(environment.ApiEndpoint + `product/${productId}`, product);
  }

  getCategories(): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `category`);
  }
}
