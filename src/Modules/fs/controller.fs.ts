import { RequestHandler } from "express";
import fsServices from "./services.fs";

const createFsController: RequestHandler = (req, res) => {
  fsServices.createFsService(req, res);
};

export default { createFsController };
