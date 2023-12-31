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
    lib.create("test", "newFile", decodedData, (err: string) => {
      console.log(err);
    });
  });
};
const readFsService = (res: Response) => {
  return lib.read(
    "test",
    "newFile",
    (err: NodeJS.ErrnoException, data: string) => {
      if (err) {
        res.send({ success: false, err });
      } else {
        res.send({ success: true, data });
      }
    }
  );
};

export default {
  createFsService,
  readFsService,
};
