import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindClientController } from "../modules/clients/useCases/findClient/FindClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const findClientController = new FindClientController();

clientsRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      document: Joi.number().required(),
    }
  },
    { abortEarly: false }
  ), createClientController.handle
)

clientsRoutes.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    }
  },
    { abortEarly: false }
  ),
  findClientController.handle
)

export { clientsRoutes }