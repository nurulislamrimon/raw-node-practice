import { RequestHandler } from "express";
import fsServices from "./services.fs";

const createFsController: RequestHandler = (req, res) => {
  fsServices.createFsService(req, res);
};
const readFsController: RequestHandler = (req, res) => {
  fsServices.readFsService(res);
};

export default { createFsController, readFsController };
