import { Injectable } from "@angular/core";
import { Product } from "../Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  // products = data;
  product: Product;
  product2: Product;
  api = 'https://5e7af62d0e046300163326fe.mockapi.io/Product';
  constructor(
    private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}`);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);

  }
  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}
