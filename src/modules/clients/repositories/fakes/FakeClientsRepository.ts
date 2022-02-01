import { Client } from '@modules/clients/entities/Client';
import { IClientsRepository } from '../IClientsRepository';

export class FakeClientsRepository implements IClientsRepository {
  private clients: string[] = [];

  async create(client: Client): Promise<void> {
    Object.assign(client, {
      id: "7e79aecd-c59c-40e0-8273-45148adbe204"
    })

    this.clients.push(JSON.stringify(client));
  }

  async findById(id: string): Promise<string> {
    const client = this.clients.find(client => JSON.parse(client).id === id);

    return client;
  }
}
