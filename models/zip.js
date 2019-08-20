const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
  d_codigo: Number,
  d_asenta: String,
  d_tipo_asenta: String,
  D_mnpio: String,
  d_estado: String,
  d_ciudad: String,
  d_CP: String
});

module.exports = mongoose.model("zip", esquema);
