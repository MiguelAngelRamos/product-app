import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductIdComponent } from './pages/product-id/product-id.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    AddProductComponent,
    SearchComponent,
    ProductIdComponent,
    HomeComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
