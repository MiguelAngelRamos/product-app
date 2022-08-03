import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductIdComponent } from './pages/product-id/product-id.component';
import { SearchComponent } from './pages/search/search.component';
//* localhost:4200/product/5
const routes: Routes = [
  {
    path: '',
    component: HomeComponent, //* El HomeComponent es la Ruta Padre y los que estan en children son sus rutas hijas
    children: [
      { path: 'list-product', component: ListProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: AddProductComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: ProductIdComponent },
      { path: '**', redirectTo: 'list-product'}
    ]

  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
