import express from "express";
import fsController from "./controller.fs";

export const fsRouter = express.Router();

fsRouter.post("/", fsController.createFsController);
fsRouter.get("/", fsController.readFsController);
fsRouter.put("/", fsController.updateFsController);
