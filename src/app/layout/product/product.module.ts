import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [ProductListComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [ProductListComponent, AddProductComponent, EditProductComponent]
})
export class ProductModule { }
