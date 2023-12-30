import { Request } from "express";
import { StringDecoder } from "string_decoder";

const createFsService = (req: Request) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });

  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);

    return decodedData;
  });
};

export default {
  createFsService,
};
