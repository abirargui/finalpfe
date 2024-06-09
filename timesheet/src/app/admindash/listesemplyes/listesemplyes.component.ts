import { Component } from '@angular/core';

export interface Employee {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  datenais: string;
  telephone: string;
  dateemboche: string;
  role: string;
}

@Component({
  selector: 'app-listesemplyes',
  templateUrl: './listesemplyes.component.html',
  styleUrls: ['./listesemplyes.component.css']
})
export class ListesemplyesComponent {
  employees: Employee[] = [];
  newEmployee: Employee = this.getEmptyEmployee();
  editingEmployee: Employee | null = null;

  getEmptyEmployee(): Employee {
    return {
      id: this.employees.length + 1,
      nom: '',
      prenom: '',
      email: '',
      datenais: '',
      telephone: '',
      dateemboche: '',
      role: ''
    };
  }

  addEmployee() {
    this.employees.push({ ...this.newEmployee, id: this.employees.length + 1 });
    this.newEmployee = this.getEmptyEmployee();
  }

  editEmployee(employee: Employee) {
    this.editingEmployee = { ...employee };
  }

  updateEmployee() {
    if (this.editingEmployee) {
      const index = this.employees.findIndex(e => e.id === this.editingEmployee!.id);
      if (index !== -1) {
        this.employees[index] = this.editingEmployee;
      }
      this.editingEmployee = null;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}