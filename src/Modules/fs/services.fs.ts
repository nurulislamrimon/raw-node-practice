import { Request, Response } from "express";
import { StringDecoder } from "string_decoder";

const createFsService = (req: Request, res: Response) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });

  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);
    res.send(decodedData);
  });
};

export default {
  createFsService,
};
