const { Schema, model } = require("mongoose");

const profile = new Schema({
  id: {
    type: "String",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    default: false,
  },
  phone_no: {
    type: "String",
    required: true,
  },
  profile_id: {
    type: "String",
    required: true,
  },
  company: {
    type: "String",
    required: true,
  },
  linkedin_url: {
    type: "String",
    required: true,
  },
  skills: {
    type: "String",
    required: true,
  },

  location: {
    type: "String",
    required: true,
  },
  createdDate: {
    type: "String",
    required: true,
  },
  updatedDate: {
    type: "String",
    required: true,
  },
});

module.exports = model("profile", profile);
