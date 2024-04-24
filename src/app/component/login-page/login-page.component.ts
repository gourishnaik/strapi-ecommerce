import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
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
    this.storeUser(data);
   localStorage.setItem('loginID', '1');
          this.loginForm.reset();
          this.router.navigate(['/products']);
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

