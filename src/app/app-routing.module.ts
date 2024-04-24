import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AdmiminLoginComponent } from './component/admimin-login/admimin-login.component';
import { AdmiSignupComponent } from './component/admi-signup/admi-signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ProductViewComponent } from './component/product-view/product-view.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"admin-login",component:AdmiminLoginComponent},
  {path:"admin-signup",component:AdmiSignupComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"product-view/:productid",component:ProductViewComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
