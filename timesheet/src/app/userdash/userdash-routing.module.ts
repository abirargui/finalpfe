import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashComponent } from './userdash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { ProjectsManagmentComponent } from './projects-managment/projects-managment.component';

const routes: Routes = [{ path: '', component: UserdashComponent ,
  children:[
    { path: '', redirectTo: '/userdash/home', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'projects-managment', component:ProjectsManagmentComponent},
    { path:'reports',component:ReportsComponent},
    { path:'timesheet-entry',component:TimesheetEntryComponent},
   
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashRoutingModule { }
