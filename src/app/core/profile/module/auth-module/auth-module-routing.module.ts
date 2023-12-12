import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/core/auth/login-page/login-page.component';
import { forgetPasswordComponent } from 'src/app/core/forget-password/forget-password.component';
import { RegisterComponent } from 'src/app/core/register/register.component';

const routes: Routes = [
  {
    path: "login", component: LoginPageComponent,

  },
  { path: "register", component: RegisterComponent },
  {
    path: "forgetPassword", component: forgetPasswordComponent,

  },


];
// 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class     AuthModuleRoutingModule
{ }
