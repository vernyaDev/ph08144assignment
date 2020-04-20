import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from "../Product";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

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