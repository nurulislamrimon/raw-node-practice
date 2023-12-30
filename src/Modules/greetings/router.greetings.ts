import express from "express";
import { greetingController } from "./controller.greetings";

export const greetingRouter = express.Router();

greetingRouter.get("/", greetingController);
