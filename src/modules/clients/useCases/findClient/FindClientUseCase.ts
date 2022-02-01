import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class FindClientUseCase {

  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
  ) { }

  async execute(id: string) {
    const client = await this.clientsRepository.findById(id);
    console.log({ client })
    if (!client) {
      throw new AppError("Client not found!", 404);
    }

    return JSON.parse(client);
  }
}

export { FindClientUseCase }