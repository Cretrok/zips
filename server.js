const bodyParser = require("body-parser");
const express = require("express");
//const mongoose = require("mongoose");
//const http = require("http");
const cors = require('cors');
const app = express();

const zips = require("./src/zip.json");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json(zips);
});
app.get("/codigo", (req, res) => {
  const codigoP = zips.map(zip => {
    return zip.d_codigo;
  });
  res.status(200).json(codigoP);
});
app.get("/codigo/:id", (req, res) => {
  const info = zips.filter((zip, index) => {
    return zip.d_codigo.includes(req.params.id);
  });
  res.status(200).json(info);
});
const Key = "ces14her28";
app.get("/codigo/:id/:key", (req, res) => {
  if (req.params.key == Key) {
    const info = zips.filter((zip, index) => {
      return zip.d_codigo.includes(req.params.id);
    });
    res.status(200).json(info);
  } else {
    res.status(200).json({ users: "No encontrado" });
  }
});

app.listen(8001, () => {
  console.log("Server started at http://localhost:8001");
});
