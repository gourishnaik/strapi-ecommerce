import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  users!: any[];
  toastr: any;
productList: any;

  constructor(
    private http: HttpClient,private api: ApiService, private cartservice: CartService
   
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
   
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:1337/api/users')
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          console.error("Error fetching users:", error);
         // this.toastr.error("Failed to fetch users");
        }
      );
  }
  

  handleDeleteUser(userId: number) {
    // Make HTTP DELETE request to delete the user with the specified userId
    this.http.delete(`http://localhost:1337/api/users/${userId}`).subscribe(
      (response) => {
        console.log("User deleted successfully:", response);
        this.fetchUsers();
        // Optionally, perform any additional actions after successful deletion
      },
      (error) => {
        console.error("Error deleting user:", error);
        // Handle error if necessary
      }
    );
  }


  adminproduct(){
    this.api.getProduct().subscribe((res) => {
      this.productList = res.data;

      console.log(this.productList);

      // this.productList.forEach((a: any) => {
      //   //quantity and price are not by defualt in api we are adding it manually
      //   Object.assign(a, { quantity: 1, total: a.price });
      // });
    });
  }
  removeItem(productId: number) {
    const url = `http://localhost:1337/api/products/${productId}`;
    this.http.delete(url).subscribe(
      () => {
        // Remove the item from the productList array or update the list
        console.log('Item removed successfully');
        this.adminproduct()
      },
      (error) => {
        console.error('Error removing item:', error);
      }
    );
    }
}
