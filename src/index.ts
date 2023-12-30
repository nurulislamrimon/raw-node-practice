/**
 * Title: Node Application
 * Description: This Application is for practice core modules
 * Author: Nurul Islam Rimon
 * Date: 2023-12-30 20:35:04
 */

import express from "express";
import { StringDecoder } from "string_decoder";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  const decoder = new StringDecoder("utf-8");

  let decodedData: string = "";

  req.on("data", (buffer: Buffer) => {
    decodedData += decoder.write(buffer);
  });
  req.on("end", (buffer: Buffer) => {
    decodedData += decoder.end(buffer);

    console.log(decodedData);
    res.send(decodedData);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
