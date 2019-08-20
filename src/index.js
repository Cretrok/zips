const bodyParser = require("body-parser");
const express = require("express");
//const mongoose = require("mongoose");
//const http = require("http");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ text: "listado de codigos" });
});
app.get("/codigo", (req, res) => {
  res.status(200).send("esto es index");
});

app.listen(8001, () => {
  console.log("Server started at http://localhost:8001");
});
