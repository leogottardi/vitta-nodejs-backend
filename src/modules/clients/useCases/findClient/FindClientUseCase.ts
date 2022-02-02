import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
class FindClientUseCase {

  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository,
  ) { }

  async execute(id: string) {
    const stringClient = await this.clientRepository.findById(id);

    if (!stringClient) {
      throw new AppError("Client not found!", 404);
    }

    const client = JSON.parse(stringClient);

    return client;
  }
}

export { FindClientUseCase }