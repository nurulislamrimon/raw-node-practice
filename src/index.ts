/**
 * Title: Node Application
 * Description: This Application is for practice core modules
 * Author: Nurul Islam Rimon
 * Date: 2023-12-30 20:35:04
 */

import express from "express";
import { mainRouter } from "./routes/router";
import { logFunc } from "./utils/log";

const app = express();
const port = 5000;

app.use("/", mainRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
