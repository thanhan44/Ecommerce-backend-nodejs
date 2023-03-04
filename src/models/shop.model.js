"use strict";

// !dmbgum from extension Mongo Snippets for Nodejs
//const mongoose = require('mongoose')
const { model, Schema, Types } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

// Declare the Schema of the Mongo model
var shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    verfify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      typw: Array,
      default: [],
    },
  },
  {
    timestamp: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
//module.exports = mongoose.model('User', userSchema);
module.exports = model(DOCUMENT_NAME, shopSchema);
