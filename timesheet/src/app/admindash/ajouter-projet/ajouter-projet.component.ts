import { Component } from '@angular/core';
import { Project } from 'src/app/services/project.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent {
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



}
