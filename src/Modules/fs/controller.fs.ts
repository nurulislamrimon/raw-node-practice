import { RequestHandler } from "express";
import fsServices from "./services.fs";

const createFsController: RequestHandler = (req, res) => {
  fsServices.createFsService(req, (err: string | NodeJS.ErrnoException) => {
    if (typeof err === "string") {
      res.send({ success: true, data: err });
    } else {
      res.send({ success: false, err });
    }
  });
};
const readFsController: RequestHandler = (req, res) => {
  fsServices.readFsService((err: NodeJS.ErrnoException, data: string) => {
    if (err) {
      res.send({ success: false, err });
    } else {
      res.send({ success: true, data });
    }
  });
};

const updateFsController: RequestHandler = (req, res) => {
  fsServices.updateFsService(req, (err: string | NodeJS.ErrnoException) => {
    if (typeof err === "string") {
      res.send({ success: true, data: err });
    } else {
      res.send({ success: false, err });
    }
  });
};

export default { createFsController, readFsController, updateFsController };
