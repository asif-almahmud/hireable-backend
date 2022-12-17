const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sectorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Sector", sectorSchema);

module.exports = model;
