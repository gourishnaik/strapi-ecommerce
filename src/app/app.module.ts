import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AdmiminLoginComponent } from './component/admimin-login/admimin-login.component';
import { AdmiSignupComponent } from './component/admi-signup/admi-signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { LoginSignupheaderComponent } from './component/login-signupheader/login-signupheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoginPageComponent,
    SignUpComponent,
    AdmiminLoginComponent,
    AdmiSignupComponent,
    AdminDashboardComponent,
    ProductViewComponent,
    LoginSignupheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
