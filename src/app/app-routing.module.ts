import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product-component';
import { ProductDetailsComponent } from './components/productDetails/product-details.component';

const routes: Routes = [
  {path:"", component:ProductComponent},
  {path:"product-details/:id", component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
