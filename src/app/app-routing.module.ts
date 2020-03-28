import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
// import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { ProductGirdComponent } from "./product-gird/product-gird.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
// import { ProductManagerComponent } from './product-manager/product-manager.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
// import { ServiceProductComponent } from './service-product/service-product.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductListComponent },
  { path: "productDetail", component: ProductDetailsComponent },
  { path: "productGird", component: ProductGirdComponent },
  { path: "contact", component: ContactComponent },
  { path: "cart", component: CartComponent }
  // { path: '**',component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
