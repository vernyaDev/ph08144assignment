import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../service/product.service";
import { Product } from "../product";

@Component({
  selector: 'app-m-add-product',
  templateUrl: './m-add-product.component.html',
  styleUrls: ['./m-add-product.component.css']
})
export class MAddProductComponent implements OnInit {

product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
  }
 addProduct() {
    this.productService
      .addProduct(this.product)
      .subscribe(data => this.router.navigateByUrl("/admin/manager"));
  }
}