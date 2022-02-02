import { Client } from '@modules/clients/entities/Client';
import { FakeClientRepository } from '@modules/clients/repositories/fakes/FakeClientRepository';
import { CreateClientUseCase } from './CreateClientUseCase';

let fakeClientRepository: FakeClientRepository;
let createClientUseCase: CreateClientUseCase;

describe('Create a client', () => {
  beforeEach(async () => {
    fakeClientRepository = new FakeClientRepository();
    createClientUseCase = new CreateClientUseCase(fakeClientRepository);
  });

  it('when all params are valid, create a client', async () => {
    const client: Client = await createClientUseCase.execute({ name: "Leo", document: 123 });

    const expected_client = new Client("Leo", 123);

    Object.assign(expected_client, {
      id: "7e79aecd-c59c-40e0-8273-45148adbe204"
    })

    expect(client).toEqual(expected_client);
  });
});
