import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductIdComponent } from './pages/product-id/product-id.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipe/imagen.pipe';



@NgModule({
  declarations: [
    AddProductComponent,
    SearchComponent,
    ProductIdComponent,
    HomeComponent,
    ListProductComponent,
    CardProductComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class ProductsModule { }
