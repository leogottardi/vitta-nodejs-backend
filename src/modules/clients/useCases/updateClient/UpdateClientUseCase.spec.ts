import { Client } from "@modules/clients/entities/Client";
import { FakeClientRepository } from "@modules/clients/repositories/fakes/FakeClientRepository";
import { AppError } from "../../../../errors/AppError";
import { CreateClientUseCase } from "../createClient/CreateClientUseCase";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

let fakeClientsRepository: FakeClientRepository;
let updateClientUseCase: UpdateClientUseCase;
let createClientUseCase: CreateClientUseCase;

describe("Update a client", () => {
  beforeEach(async () => {
    fakeClientsRepository = new FakeClientRepository();

    updateClientUseCase = new UpdateClientUseCase(fakeClientsRepository);
    createClientUseCase = new CreateClientUseCase(fakeClientsRepository);

    await createClientUseCase.execute({ name: "Leo", document: 123 });
  });

  it("when all params are valid, updated a client", async () => {
    const client: Client = await updateClientUseCase.execute({
      id: "7e79aecd-c59c-40e0-8273-45148adbe204",
      name: "Novo nome",
      document: 4444
    });

    const expected_client = new Client("Novo nome", 4444);

    Object.assign(expected_client, {
      id: "7e79aecd-c59c-40e0-8273-45148adbe204"
    });

    expect(client).toEqual(expected_client);
  })

  it("returns an exception when it cannot find the client", async () => {
    await expect(updateClientUseCase.execute({ id: "123" })).rejects.toBeInstanceOf(AppError);
  });
});
