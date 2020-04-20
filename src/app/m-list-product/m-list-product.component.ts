import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from "../Product";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-m-list-product',
  templateUrl: './m-list-product.component.html',
  styleUrls: ['./m-list-product.component.css']
})
export class MListProductComponent implements OnInit {

  page=1;
  pageSize=10;
  // items.length=10;
  constructor( private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit() {
     this.getProducts();
  }
  products: Product[];
  getProducts(){
return this.productService.getProducts().subscribe(response => this.products = response);
  } 

  removeItem(id){
   this.productService.removeProduct(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
    // this.products = this.products.filter(product => product.id != id);
  }
}