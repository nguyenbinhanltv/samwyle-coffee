import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.interface';
import { ResponseAPI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private _http: HttpClient) {}

  getTables(): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `table`);
  }
}
