import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClientUseCase } from "./FindClientUseCase";

class FindClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const findClientUseCase = container.resolve(FindClientUseCase);

    const client = await findClientUseCase.execute(id);

    return response.json(client);
  }
}

export { FindClientController }