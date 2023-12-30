import fs from "fs";
import path from "path";

export const lib: Record<string, string> = {};

lib.baseDir = path.join(__dirname, "../.data/");
