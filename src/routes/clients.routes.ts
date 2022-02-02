import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { FindClientController } from "../modules/clients/useCases/findClient/FindClientController";
import { UpdateClientController } from "../modules/clients/useCases/updateClient/UpdateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const updateClientController = new UpdateClientController();
const findClientController = new FindClientController();

clientsRoutes.use(ensureAuthenticated);

clientsRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      document: Joi.number().required(),
    }
  },
    { abortEarly: false }
  ),
  createClientController.handle
)

clientsRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      document: Joi.number(),
    }
  },
    { abortEarly: false }
  ),
  updateClientController.handle
)

clientsRoutes.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  },
    { abortEarly: false }
  ),
  findClientController.handle
)

export { clientsRoutes }