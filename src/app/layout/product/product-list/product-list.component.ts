import { Component, OnInit } from '@angular/core';
import { Product } from "src/app/shared/models/Product";
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
   this.fetchProducts();
  }

  fetchProducts() {
    this._service.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  deleteProd(id: number) {
    if(confirm("do you want to delete..?")){
      console.log("delete operation...?")
      this._service.deleteProduct(id).subscribe(
        ()=>{
          alert("product deleted successfully..!");
          console.log("delete operation...?")
       //   this.fetchProducts();
        },(err)=>{
          console.log("Error",err)
        }
      )
    }

  }

}
