import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DataProductsService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  //* Obtener todos los productos

  getProducts(): Observable<IProduct[]> {
    // * `` alt + 96
    return this.http.get<IProduct[]>(`${this.baseUrl}/products`);
  }

  getProductsById(id: number):Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/products/${id}`);
  }
  //* mac, hyper
  getSuggestions(termino: string): Observable<IProduct[]> {
    //* alt + 96 ``
    return this.http.get<IProduct[]>(`${this.baseUrl}/products?q=${termino}&_limit=6`);
  }
  //* http://localhost:3000/products?q=gamer&_limit=2
}
