import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;                          //initial 0

  showLoginButton: boolean = true;
  showLogoutButton:boolean =false;
  usernameLogin: any;
  constructor(private cartservice:CartService,private router: Router) { }

  ngOnInit(): void {
this.cartservice.getProducts()
.subscribe(res=>{
this.totalItem=res.length;
})
this.checklocalstorageLogin();
this.getusername();
  }


  checklocalstorageLogin(){
    const loginID = localStorage.getItem('loginID');
    if (loginID === '1') {
      this.showLoginButton = false;
      this.showLogoutButton =true;
    }
  }
  

  isAdminDashboard(): boolean {
    return this.router.url === '/admin-dashboard';
  }
getusername(){
  
 // Retrieve the user data from localStorage
const userDataString = localStorage.getItem('user');

// Check if userDataString is not null before parsing
if (userDataString !== null) {
    // Parse the user data string into a JavaScript object
    const userData = JSON.parse(userDataString);
console.log(userData)
    // Extract the username from the user data
 this.usernameLogin = userData.username
    // Now, 'username' variable contains the value of the username from localStorage
   
} else {
    // Handle the case where userDataString is null
    console.error('No user data found in localStorage');
}

}
}
