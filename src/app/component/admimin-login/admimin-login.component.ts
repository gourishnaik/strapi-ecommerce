import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admimin-login',
  templateUrl: './admimin-login.component.html',
  styleUrls: ['./admimin-login.component.css']
})
export class AdmiminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      identifier: [''],
      password: ['']
    });
    localStorage.removeItem('loginID');
    localStorage.removeItem('user');
  }

  onSubmit(){
  
    const url = 'http://localhost:1337/api/auth/local';
  const user = this.loginForm.value;

  if (user.identifier && user.password) {
    this.http.post<any>(url, user)
      .toPromise()
      .then((data) => {
        console.log("data iis",data)
        if (data.jwt) {
   ///    this.storeUser(data);
  
          this.loginForm.reset();
          this.router.navigate(['/admin-dashboard']);
          // window.location.reload();
        }
      })
      .catch((error) => {
    //  this.toastr.error(error.message || 'An error occurred during login.', '', { timeOut: 3000 });
    alert(error.message||'An error occurred during login')
      });
  }
  }


   storeUser = (data: any) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: data.user.username,
        jwt: data.jwt,
      })
    );
  };
  
  }


