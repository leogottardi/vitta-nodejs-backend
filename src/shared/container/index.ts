import { container } from "tsyringe";
import { ClientsRepository } from "../../modules/clients/repositories/implementations/ClientsRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
)