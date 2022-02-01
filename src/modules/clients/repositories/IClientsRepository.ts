import { Client } from "../entities/Client";

interface IClientsRepository {
  create(client: Client): Promise<void>;
  findById(id: string): Promise<string>;
}

export { IClientsRepository }