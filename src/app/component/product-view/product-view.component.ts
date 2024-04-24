import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  productdata: any;
  showadd: boolean = true;
  showremove: boolean = false;
  constructor(private api: ApiService, private activatedroute: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is",productid)
    productid && this.api.getproductbyid(productid).subscribe((res: any) => {
      this.productdata = res.data;
      console.log( this.productdata)
    })

  }
  addtocart(productdata: any) {
  
    this.cartservice.addtoCart(productdata);
  }

  
}
