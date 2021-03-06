import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";
import { ProductGirdComponent } from "./product-gird/product-gird.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeProductComponent } from "./home-product/home-product.component";
import { MListProductComponent } from "./m-list-product/m-list-product.component";
import { MEditProductComponent } from "./m-edit-product/m-edit-product.component";
import { MAddProductComponent } from "./m-add-product/m-add-product.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", component: HomeProductComponent },
      { path: "products", component: ProductListComponent },
      { path: "productDetail", component: ProductDetailsComponent },
      { path: "productGird", component: ProductGirdComponent },
      { path: "contact", component: ContactComponent },
      { path: "cart", component: CartComponent },
      { path: "about", component: AboutComponent },
      { path: "blog", component: AboutComponent }
    ]
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "manager", pathMatch: "full" },
      {
        path: "manager",
        component: ProductManagerComponent,
        children: [
          { path: "", component: MListProductComponent },
          { path: "listProduct", component: MListProductComponent },
          { path: "edit/:id", component: MEditProductComponent },
          { path: "add-product", component: MAddProductComponent }
        ]
      }
    ]
  },
  { path: "**", component: PageNotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
