import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../entities/Client";
import { IClientRepository } from "./IClientRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
  ) { }

  async execute({ name, document }: ICreateClientDTO): Promise<Client> {
    const client = new Client(name, document);

    await this.clientRepository.create(client);

    return client;
  }
}

export { CreateClientUseCase }