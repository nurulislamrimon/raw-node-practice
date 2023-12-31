import { Request } from "express";
import { StringDecoder } from "string_decoder";
import { lib } from "../../lib/data";

const createFsService = (req: Request, cb: Function) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });

  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);
    lib.create("test", "newFile", decodedData, cb);
  });
};

const readFsService = (cb: Function) => {
  return lib.read("test", "newFile", cb);
};

const updateFsService = (req: Request, cb: Function) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });

  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);
    lib.update("test", "newFile", decodedData, cb);
  });
};
const deleteFsService = (cb: Function) => {
  lib.delete("test", "newFile", cb);
};
export default {
  createFsService,
  readFsService,
  updateFsService,
  deleteFsService,
};
