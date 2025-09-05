const mongoose = require("mongoose");

const ConfigurationSchema = new mongoose.Schema({
  configId: { type: String, required: true, unique: true },
  matrix: { type: [[String]], required: true }, // 2D array
  remark: { type: String, default: "" }
});

module.exports = mongoose.model("Configuration", ConfigurationSchema);
