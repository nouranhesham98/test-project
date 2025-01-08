import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

];
@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
    ]
  })
export class DashboardModule { }
