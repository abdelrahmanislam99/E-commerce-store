import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from './../Components/products/products.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="https://fakestoreapi.com/products"

  constructor(private _http:HttpClient) { }

  getProducts(): Observable<PeriodicElement[]> {
    return this._http.get<PeriodicElement[]>(this.url)
  }
}
