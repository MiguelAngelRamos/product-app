import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
//* localhost:4200/products
const routes: Routes = [
  {
    path: '',
    component: HomeComponent, //* El HomeComponent es la Ruta Padre y los que estan en children son sus rutas hijas
    children: [
      { path: 'list-product', component: ListProductComponent }
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
