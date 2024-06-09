import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashComponent } from './userdash.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { ProjectsManagmentComponent } from './projects-managment/projects-managment.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [{ path: '', component: UserdashComponent ,
  children:[
    { path: '', redirectTo: '/userdash/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'projects-managment', component:ProjectsManagmentComponent},
    { path:'reports',component:ReportsComponent},
    { path:'timesheet-entry',component:TimesheetEntryComponent},
    {path:'employee-profile',component:EmployeeProfileComponent}
   
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashRoutingModule { }
