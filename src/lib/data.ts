import fs from "fs";
import path from "path";

export const lib: Record<string, any> = {};

lib.baseDir = path.join(__dirname, "../../.data/");

lib.create = (dir: string, file: string, data: any, cb: Function) => {
  fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringData, (err) => {
          if (!err) {
            cb("Success");
          } else {
            cb(err);
          }
        });
      } else {
        cb(err);
      }
    }
  );
};
