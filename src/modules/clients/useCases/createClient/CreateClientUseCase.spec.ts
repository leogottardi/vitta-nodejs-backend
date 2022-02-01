import { Client } from '@modules/clients/entities/Client';
import { FakeClientsRepository } from '@modules/clients/repositories/fakes/FakeClientsRepository';
import { CreateClientUseCase } from './CreateClientUseCase';

let fakeClientsRepository: FakeClientsRepository;
let createClientUseCase: CreateClientUseCase;

describe('Create a client', () => {
  beforeEach(async () => {
    fakeClientsRepository = new FakeClientsRepository();
    createClientUseCase = new CreateClientUseCase(fakeClientsRepository);
  });

  it('deve buscar um plano pelo identificador', async () => {
    const client: Client = await createClientUseCase.execute({ name: "Leo", document: 123 });

    const expected_client = new Client("Leo", 123);

    Object.assign(expected_client, {
      id: "7e79aecd-c59c-40e0-8273-45148adbe204"
    })

    expect(client).toEqual(expected_client);
  });
});
