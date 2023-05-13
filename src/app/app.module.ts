import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material-module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormFieldErrorExample } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldErrorExample,
    ProductsComponent,
    PageNotFoundComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule
    // MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
