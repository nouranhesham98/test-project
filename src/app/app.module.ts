// import { AngularFireModule } from '@angular/fire/compat';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../enviroments/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardModule } from './home/dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

// const appRoutes: Routes = [
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('./login/login.module').then((m) => m.LoginModule),
//   }, // Lazy load LoginModule
//   {
//     path: 'dashboard',
//     loadChildren: () =>
//       import('./home/dashboard/dashboard.module').then((m) => m.DashboardModule),
//   }, 
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', redirectTo: 'login' } 
// ];

@NgModule({
  declarations: [AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    DashboardModule,
    LoginModule
  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], // Optionally add this
  bootstrap: [AppComponent],
})
export class AppModule {}
