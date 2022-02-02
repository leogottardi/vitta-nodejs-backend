import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repositories/IClientRepository";

interface IRequest {
  id: string;
  name?: string;
  document?: number;
}

@injectable()
class UpdateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
  ) { }

  async execute({ id, name, document }: IRequest): Promise<Client> {
    const stringClient = await this.clientRepository.findById(id);

    if (!stringClient) {
      throw new AppError("Client not found", 404);
    }

    let client = JSON.parse(stringClient);

    Object.assign(client, {
      name: name ?? client.name,
      document: document ?? client.document
    })

    await this.clientRepository.save(client);

    return client;
  }
}

export { UpdateClientUseCase }