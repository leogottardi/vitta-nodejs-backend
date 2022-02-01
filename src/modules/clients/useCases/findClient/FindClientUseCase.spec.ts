import { Client } from "@modules/clients/entities/Client";
import { FakeClientsRepository } from "@modules/clients/repositories/fakes/FakeClientRepository";
import { AppError } from "../../../../errors/AppError";
import { CreateClientUseCase } from "../createClient/CreateClientUseCase";
import { FindClientUseCase } from "./FindClientUseCase";

let fakeClientsRepository: FakeClientsRepository;
let findClientUseCase: FindClientUseCase;
let createClientUseCase: CreateClientUseCase;

describe("Find a client", () => {
  beforeEach(async () => {
    fakeClientsRepository = new FakeClientsRepository();

    findClientUseCase = new FindClientUseCase(fakeClientsRepository);
    createClientUseCase = new CreateClientUseCase(fakeClientsRepository);

    await createClientUseCase.execute({ name: "Leo", document: 123 });
  });

  it("return a client", async () => {
    const client: Client = await findClientUseCase.execute("7e79aecd-c59c-40e0-8273-45148adbe204");

    const expected_client = new Client("Leo", 123);

    Object.assign(expected_client, {
      id: "7e79aecd-c59c-40e0-8273-45148adbe204"
    });

    expect(client).toEqual(expected_client);
  })

  it("returns an exception when it cannot find the client", async () => {
    await expect(findClientUseCase.execute("123")).rejects.toBeInstanceOf(AppError);
  });
});
