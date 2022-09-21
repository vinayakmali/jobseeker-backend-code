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
    required: false,
  },
  profile_id: {
    type: "String",
    required: true,
  },
  company: {
    type: "String",
    required: false,
  },
  linkedin_url: {
    type: "String",
    required: true,
  },
  skills: {
    type: "String",
    required: false,
  },

  location: {
    type: "String",
    required: false,
  },
  createdDate: {
    type: "String",
    required: true,
  },
  updatedDate: {
    type: "String",
    required: false,
  },
});

module.exports = model("profile", profile);
