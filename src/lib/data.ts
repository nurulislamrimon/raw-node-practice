import fs from "fs";
import path from "path";

export const lib: Record<string, any> = {};

lib.baseDir = path.join(__dirname, "../.data/");

lib.create = (dir: string, file: string, data: string, cb: Function) => {
  fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringData, (err) => {
          if (!err) {
            cb(false);
          } else {
            cb("Error closing the new file!");
          }
        });
      } else {
        cb(err);
      }
    }
  );
};
