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
    // Lay danh sach san pham
    // return this.products;
    return this.http.get<Product[]>(`${this.api}`);
  }

  getProduct(id): Observable<Product> {
    // console.log(id);
    // Chi tiet san pham
    // return (this.product = this.products.find(
    //   product => (product.id = product.id))
    // return this.product = product;
    // return this.products.find(product => product.id == id);
    // console.log(this.http.get<Productts>(`${this.api}/Product/:id`));
    return this.http.get<Product>(`${this.api}/${id}`);

  }
  removeProduct(id): Observable<Product> {
    // Xoa san pham
    // return (this.products = this.products.filter(product => product.id != id));
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Product> {
    // them san pham
    // let newProduct = { id: 5, ...product };
    // return this.products.push(newProduct);
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  // editProduct(product) {
  //   // sua san pham
  //   var index = this.products.indexOf(product);
  //   let newProduct = product;
  //   if (index !== -1) {
  //     return (this.products[index] = newProduct);
  //   }
  // }
}
