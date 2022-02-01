import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../entities/Client";
import { IClientsRepository } from "./IClientsRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
  ) { }

  async execute({ name, document }: ICreateClientDTO): Promise<Client> {
    const client = new Client(name, document);

    await this.clientsRepository.create(client);

    return client;
  }
}

export { CreateClientUseCase }