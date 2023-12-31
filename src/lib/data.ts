import fs from "fs";
import path from "path";

export const lib: Record<string, any> = {};

lib.baseDir = path.join(__dirname, "../../.data/");

// ==============================================
// ================= create file ================
// ==============================================
lib.create = (dir: string, file: string, data: any, cb: Function) => {
  // open file
  fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        // write file
        fs.writeFile(fileDescriptor, stringData, (err) => {
          if (!err) {
            cb("Successfully added!");
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
// ==============================================
// ================= read file ==================
// ==============================================
lib.read = (dir: string, file: string, cb: Function) => {
  fs.readFile(
    lib.baseDir + dir + "/" + file + ".json",
    "utf8",
    (err, buffer) => {
      cb(err, buffer);
    }
  );
};
// ==============================================
// ================ update file =================
// ==============================================
lib.update = (dir: string, file: string, data: any, cb: Function) => {
  // open the file
  fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "r+",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);

        fs.ftruncate(fileDescriptor, (err) => {
          if (!err) {
            fs.writeFile(fileDescriptor, stringData, (err) => {
              if (err) {
                cb(err);
              } else {
                fs.close(fileDescriptor, (err) => {
                  if (err) {
                    cb(err);
                  } else {
                    cb("File updated successfully!");
                  }
                });
              }
            });
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

// ==============================================
// ================= delete file ==================
// ==============================================
lib.delete = (dir: string, file: string, cb: Function) => {
  fs.unlink(lib.baseDir + dir + "/" + file + ".json", (err) => {
    if (err) {
      cb(err);
    } else {
      cb("File deleted successfully!");
    }
  });
};
