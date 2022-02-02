import 'dotenv/config';
import "reflect-metadata";
import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import "./shared/container"

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";
import { errors } from "celebrate";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status).json({
      message: err.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
})

app.listen(3333, () => console.log("Server is running!"));