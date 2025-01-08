import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// const routes: Routes = [
//   { path: 'logi', component: LoginComponent },
// ];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    // RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
