import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public productList= new BehaviorSubject<any>([]);

  constructor() { }


///GETTER
getProducts(){
return this.productList.asObservable();

}

///SETTER

setProduct(product:any){
  this.cartItemList.push(...product);       // pushing product to cart
  this.productList.next(product);           //data will pass where it was subscribed
}

// add to cart

addtoCart(product:any){
this.cartItemList.push(product);            // product will be pushed inside it
this.productList.next(this.cartItemList);   // next means it will get passed whenever it is been called
this.getTotalPrice();                       // calculates total price when method is been called
//console.log(this.cartItemList)           // to check data is goingtocart
}

getTotalPrice():number{

  let grandTotal=0;    // first iitialise it to 0
  this.cartItemList.map((a:any)=>{
  grandTotal +=a.total;
})
return grandTotal
}
  
removeCartItem(product:any){         //to remove single item in cart or delete
this.cartItemList.map((a:any, index:any)=>{
   if(product.id ===a.id)                 //if product id matches the id which we have then removeid
    this.cartItemList.splice(index,1)   // we have to remove one item from list splice is used to delete or add new element

})
this.productList.next(this.cartItemList); // on delete item cart must be updated
}

//empty full cart
removeAllCart(){
  this.cartItemList=[]   //empty array
  this.productList.next(this.cartItemList)
}



}
