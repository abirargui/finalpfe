import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  @Input() employeeId!: number;
  employee!: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }
}