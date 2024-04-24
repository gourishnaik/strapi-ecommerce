import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admi-signup',
  templateUrl: './admi-signup.component.html',
  styleUrls: ['./admi-signup.component.css']
})
export class AdmiSignupComponent implements OnInit {
  signupform!: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router  ) {}

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit(){
  
    const url = 'http://localhost:1337/api/auth/local/register';
  const user = this.signupform.value;

  if (user.username && user.password && user.email) {
    this.http.post<any>(url, user)
      .toPromise()
      .then((data) => {
        console.log("data iis",data)
        if (data.jwt) {
       this.storeUser(data);
          this.signupform.reset();
          this.router.navigate(['/admin-login']);
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



