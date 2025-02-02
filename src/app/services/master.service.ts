import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProduct, Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http :HttpClient) { }

  getProducts():Observable<any>
  {
    return this.http.get<any>('https://localhost:7256/api/Products')
  }

  addProduct(obj:AddProduct):Observable<any>
  {
    return this.http.post<any>('https://localhost:7256/api/Products/',obj)
  }

  addUpdate(obj:AddProduct,id:string):Observable<any>
  {
    return this.http.put<any>('https://localhost:7256/api/Products/'+id,obj)
  }

  delete(id:string):Observable<any>
  {
    return this.http.delete<any>("https://localhost:7256/api/Products/"+id);
  }

}
