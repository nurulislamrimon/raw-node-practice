"use strict";
/**
 * Title: Node Application
 * Description: This Application is for practice core modules
 * Author: Nurul Islam Rimon
 * Date: 2023-12-30 20:35:04
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const string_decoder_1 = require("string_decoder");
const app = (0, express_1.default)();
const port = 5000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    console.log(process.env.NODE_ENV);
    const decoder = new string_decoder_1.StringDecoder("utf-8");
    let decodedData = "";
    req.on("data", (buffer) => {
        decodedData += decoder.write(buffer);
    });
    req.on("end", (buffer) => {
        decodedData += decoder.end(buffer);
        console.log(decodedData);
        res.send(decodedData);
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
