import { Client } from "../entities/Client";

interface IClientRepository {
  create(client: Client): Promise<void>;
  findById(id: string): Promise<string>;
}

export { IClientRepository }