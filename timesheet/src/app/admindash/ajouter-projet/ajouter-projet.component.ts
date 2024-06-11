import { Component } from '@angular/core';
import { proj, ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent {
  proj: proj = {

    nom: '',
    description: '',
    datedebut: '',
    datefin: '',
    nbr_heures_travailler: 0,
    status: '',
    tache: '',
  };
constructor(private ProjectService:ProjectService) { }

  addProject() {
   this.ProjectService.addProject(this.proj).subscribe();
  }



}
