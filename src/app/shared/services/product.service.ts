import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL:string = environment.baseURL;
  // baseURL:string = "getAll";
  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(this.baseURL+"getAll");
  }

  getProducts(){
    return this._http.get<Product[]>(this.baseURL+"getAll");
  }

  getProductById(id:number){
    return this._http.get<Product>(this.baseURL+"get?id="+id);
  }

  postProduct(prod:Product){
    return this._http.post(this.baseURL+"add",prod);
  }

  putProduct(prod:Product){
    return this._http.put(this.baseURL+"edit",prod);

  }
  deleteProduct(id:number){
    return this._http.delete(this.baseURL+"delete?id="+id);
  }

}
