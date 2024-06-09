import { Component } from '@angular/core';
export interface Client {
  idC: number;
  nom: string;
  email: string;
  projet: string;
  notation: number;
  revoir: string;
  photo: string;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: Client[] = [];
  newClient: Client = this.getEmptyClient();
  editingClient: Client | null = null;

  getEmptyClient(): Client {
    return {
      idC: this.clients.length + 1,
      nom: '',
      email: '',
      projet: '',
      notation: 0,
      revoir: '',
      photo: ''
    };
  }

  
  editClient(client: Client) {
    this.editingClient = { ...client };
  }

  updateClient() {
    if (this.editingClient) {
      const index = this.clients.findIndex(c => c.idC === this.editingClient!.idC);
      if (index !== -1) {
        this.clients[index] = this.editingClient;
      }
      this.editingClient = null;
    }
  }

  deleteClient(idC: number) {
    this.clients = this.clients.filter(client => client.idC !== idC);
  }

}
