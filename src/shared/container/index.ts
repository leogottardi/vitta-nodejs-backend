import { container } from "tsyringe";
import { ClientRepository } from "../../modules/clients/repositories/implementations/ClientRepository";
import { IClientRepository } from "../../modules/clients/repositories/IClientRepository";

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
)