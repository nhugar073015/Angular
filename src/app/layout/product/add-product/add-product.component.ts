import { Component, OnInit } from '@angular/core';
import * as _ from '../../../shared/constants/constant';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ratings: string[] = _.ratings;

  constructor(private _service:ProductService) { }

  ngOnInit(): void {
  }

  addProd(frm){
    this._service.postProduct(frm.value).subscribe(
      (res) => {
      //  let msg=res.msg;
        alert(res['msg']);
      },
      (err)=>{
        alert(JSON.parse(err));
      }
    )
  }
}
