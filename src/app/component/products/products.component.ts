import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiService, private cartservice: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res.data;

      console.log(this.productList);

      this.productList.forEach((a: any) => {
        //quantity and price are not by defualt in api we are adding it manually
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  //new method
  addtoCart(item: any) {
    this.cartservice.addtoCart(item);
    console.log('utem is',item)
    //addtocart(item) comes from service of cart service
  }
}
