import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldErrorExample } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", component:FormFieldErrorExample},
  {path:"login", component:FormFieldErrorExample},
  {path:"products", component:ProductsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
