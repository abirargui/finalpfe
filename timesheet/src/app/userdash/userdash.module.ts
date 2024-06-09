import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashRoutingModule } from './userdash-routing.module';
import { UserdashComponent } from './userdash.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProjectsManagmentComponent } from './projects-managment/projects-managment.component';
import { ReportsComponent } from './reports/reports.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@NgModule({
  declarations: [
    UserdashComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    ProjectsManagmentComponent,
    ReportsComponent,
    TimesheetEntryComponent,
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    UserdashRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserdashModule { }
