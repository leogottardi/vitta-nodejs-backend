import { getRedis, setRedis } from "../../../../config/redis";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../IClientRepository";

class ClientRepository implements IClientRepository {
  async create(client: Client): Promise<void> {
    await setRedis(`client-${client.id}`, JSON.stringify(client));
  }

  async findById(id: string): Promise<string> {
    const client = await getRedis(`client-${id}`);
    return client;
  }
}

export { ClientRepository }