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
    const client = await this.clientRepository.findById(id);
    console.log({ client })
    if (!client) {
      throw new AppError("Client not found!", 404);
    }

    return JSON.parse(client);
  }
}

export { FindClientUseCase }