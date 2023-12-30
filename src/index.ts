/**
 * Title: Node Application
 * Description: This Application is for practice core modules
 * Author: Nurul Islam Rimon
 * Date: 2023-12-30 20:35:04
 */

import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  req.on("data", (buffer) => {
    console.log(buffer);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
