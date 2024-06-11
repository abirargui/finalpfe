import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable,  of } from 'rxjs';
export interface Project {
  idP: number;
  idE: number;
  idT:number;
  idC:number;
  nom: string;
  description: string;
  datedebut: any;
  datefin: any;
  nbr_heures_travailler: number;
  status: string;
  tache: string;
}

export interface proj {
  
  nom: string;
  description: string;
  datedebut: any;
  datefin: any;
  nbr_heures_travailler: number;
  status: string;
  tache: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'http://localhost:3000/projet'; 
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; // URL de l'API des projets

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      );
  }
  addProject(proj: proj): Observable<Project> {
    return this.http.post<Project>(`${this.projectsUrl}/new`, proj, this.httpOptions)
      .pipe(
        catchError(this.handleError<Project>('addProject'))
      );
  }

  updateProject(project: Project): Observable<any> {
    const url = `${this.projectsUrl}/${project.idP}`;
    return this.http.put(url, project, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProject'))
      );
  }

  deleteProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.delete<Project>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Project>('deleteProject'))
      );
  }

  // Ajoutez les autres méthodes pour ajouter, modifier et supprimer un projet ici

  /** Gère les erreurs HTTP */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
