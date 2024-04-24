import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([])
  public amount: number = 0;
  getProduct() {
    return this.http.get<any>('http://localhost:1337/api/products?populate=*').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getproductbyid(id: string) {
    return this.http.get("http://localhost:1337/api/products/" + id)
  }
  addtocart(data: any) {
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist)
  }

 
}
