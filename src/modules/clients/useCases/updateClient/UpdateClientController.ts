import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, document } = request.body;

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    const client = await updateClientUseCase.execute({
      id,
      name,
      document
    });

    return response.status(200).json(client);
  }
}

export { UpdateClientController }