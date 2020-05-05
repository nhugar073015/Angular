import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    loadChildren: () => import('./layout/product/product.module').then(d => d.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
