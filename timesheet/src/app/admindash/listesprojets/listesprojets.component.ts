import { Component} from '@angular/core';
import { Project } from 'src/app/services/project.service';

@Component({
  selector: 'app-listesprojets',
  templateUrl: './listesprojets.component.html',
  styleUrls: ['./listesprojets.component.css']
})
export class ListesprojetsComponent  {
  projects: Project[] = [];
  newProject: Project = this.getEmptyProject();
  editingProject: Project | null = null;

  getEmptyProject(): Project {
    return {
      id: this.projects.length + 1,
      nom: '',
      description: '',
      dateDebut: '',
      dateFin: '',
      nbr_heures_travailler: 0,
      status: '',
      tache: ''
    };
  }

  addProject() {
    this.projects.push({ ...this.newProject, id: this.projects.length + 1 });
    this.newProject = this.getEmptyProject();
  }

  editProject(project: Project) {
    this.editingProject = { ...project };
  }

  updateProject() {
    if (this.editingProject) {
      const index = this.projects.findIndex(p => p.id === this.editingProject!.id);
      if (index !== -1) {
        this.projects[index] = this.editingProject;
      }
      this.editingProject = null;
    }
  }

  deleteProject(id: number) {
    this.projects = this.projects.filter(project => project.id !== id);
  }}