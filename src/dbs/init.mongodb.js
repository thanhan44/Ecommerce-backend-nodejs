"use strict";

const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
/*
 * If we have issue MongooseServerSelectionError: connect ECONNREFUSED ::1:27017}
 * ===> change 'localhost' --> '127.0.0.1'
 */
const connectString = `mongodb://127.0.0.1:27017/Ecommerce_dev`;

// Use Singleton Design Pattern
class Database {
  constructor(type = "mongodb") {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    //dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => {
        console.log(`Connected Mongodb Success`);
        countConnect();
      })
      .catch((err) => console.error(`Error Connect!::${err}}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
