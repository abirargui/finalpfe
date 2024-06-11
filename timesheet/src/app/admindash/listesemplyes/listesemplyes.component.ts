import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';



@Component({
  selector: 'app-listesemplyes',
  templateUrl: './listesemplyes.component.html',
  styleUrls: ['./listesemplyes.component.css']
})
export class ListesemplyesComponent implements OnInit {
  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }
}
  