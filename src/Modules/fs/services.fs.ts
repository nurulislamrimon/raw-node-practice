import { Request, Response } from "express";
import { StringDecoder } from "string_decoder";
import { lib } from "../../lib/data";

const createFsService = (req: Request, res: Response) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });

  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);
    lib.create("test", "newFile", { name: "Bangladesh" }, (err: string) => {
      console.log(err);
    });
  });
};

export default {
  createFsService,
};
