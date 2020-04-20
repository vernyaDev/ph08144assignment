import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGirdComponent } from './product-gird/product-gird.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { OurBrandComponent } from './our-brand/our-brand.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './service/product.service';
import { MListProductComponent } from './m-list-product/m-list-product.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule,NgbModule ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, HeaderComponent, HomeComponent, SliderComponent, HomeProductComponent, ProductListComponent, ProductGirdComponent, ContactComponent, CartComponent, OurBrandComponent, ProductDetailsComponent, AboutComponent, BlogComponent, ProductManagerComponent, PageNotFound404Component, AdminComponent, MListProductComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService]
})
export class AppModule { }
