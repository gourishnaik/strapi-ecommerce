import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;
  grandTotal1: any;
  cartempty:boolean = false;
  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.products = res; //we should loop data with table by name products
      this.grandTotal = this.cartservice.getTotalPrice();
    });
  }
  get grandTotals() {
    return this.products.reduce(
      (
        acc: number,
        item: { attributes: { price: number; quantity: number } }
      ) => acc + item.attributes.price * item.attributes.quantity,
      0
    );
  }
  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
    if(this.products.length ==0){
      this.cartempty = true
    }
  }
  emptycart() {
    this.cartservice.removeAllCart();
    this.cartempty = true
  }
  checkout(){
    this.cartservice.removeAllCart();
  }
  calculateTotalPrice(item: any): number {
    return item.attributes.price * item.quantity;
  }

  // Calculate grand total
  getGrandTotal(): number {
    let grandTotal1 = 0;
    this.products.forEach((item: any) => {
      grandTotal1 += this.calculateTotalPrice(item);
    });
    return grandTotal1;
  }
}
