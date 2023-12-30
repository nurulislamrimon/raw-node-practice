import { RequestHandler } from "express";

const createFsController: RequestHandler = (req, res) => {
  //   const data = fsServices.createFsService(req);

  res.send("data");
};

export default { createFsController };
