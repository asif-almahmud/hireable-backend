const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    agreeToTerms: {
      type: Boolean,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Profile", profileSchema);

module.exports = model;
