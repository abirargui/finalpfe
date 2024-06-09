import { Component, OnInit } from '@angular/core';
interface Project {
  id: number;
  name: string;
  isActive: boolean;
}
@Component({
  selector: 'app-projects-managment',
  templateUrl: './projects-managment.component.html',
  styleUrls: ['./projects-managment.component.css']
})
export class ProjectsManagmentComponent implements OnInit {
  projects: Project[] = [
    { id: 1, name: 'Project 1', isActive: true },
    { id: 2, name: 'Project 2', isActive: false },
    { id: 3, name: 'Project 3', isActive: true },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleProjectStatus(project: Project): void {
    project.isActive = !project.isActive;
  }

}