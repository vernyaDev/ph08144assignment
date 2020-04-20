import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from "../Product";

@Component({
  selector: 'app-m-list-product',
  templateUrl: './m-list-product.component.html',
  styleUrls: ['./m-list-product.component.css']
})
export class MListProductComponent implements OnInit {

  page=1;
  pageSize=10;
  // items.length=10;
  constructor( private productService: ProductService) {

   }

  ngOnInit() {
     this.getProducts();
  }
  products: Product[];
  getProducts(){
return this.productService.getProducts().subscribe(response => this.products = response);
  } 
}