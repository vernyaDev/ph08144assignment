import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from "../Product";

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  products: Product[];
  getProducts(){
return this.productService.getProducts().subscribe(response => this.products = response);
  } 
}
