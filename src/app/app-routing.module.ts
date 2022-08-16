import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  //* localhost:4200/products
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard]
  },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'prefix', redirectTo: 'auth'}, 
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//* localhost:4200//fefqfq //* localhost:4200/miruta/314fr //* localhost:4200/miruta