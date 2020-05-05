import { Component, OnInit } from '@angular/core';
import * as _ from '../../../shared/constants/constant';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  ratings: string[] = _.ratings;
  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router:Router ,private _service: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = Number(params.get("id"));
      }
    );
    this._service.getProductById(this.id).subscribe(
      res => {
        this.product = res;
        console.log(this.product);
      }
    )
  }

  updateProd(frm){
    this._service.putProduct(frm.value).subscribe(
      () => {
        alert('Updated Successfully');
        this.router.navigate(['/']);
      }
    )
  }

}