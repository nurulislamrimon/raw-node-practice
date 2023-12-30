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
