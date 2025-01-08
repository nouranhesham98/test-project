// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, // Added by the CLI
    { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home',loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }