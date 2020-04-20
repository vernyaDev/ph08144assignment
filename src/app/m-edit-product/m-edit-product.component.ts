import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "../service/product.service";
import { Product } from "../Product";

@Component({
  selector: "app-m-edit-product",
  templateUrl: "./m-edit-product.component.html",
  styleUrls: ["./m-edit-product.component.css"]
})
export class MEditProductComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    return this.route.params.subscribe(param => {
      this.productService
        .getProduct(param.id)
        .subscribe(data => (this.product = data));
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/admin/manager");
    });
  }
}
