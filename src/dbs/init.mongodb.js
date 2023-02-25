"use strict";

const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
const {
  db: { host, port, name },
} = require("../configs/config.mongodb");
/*
 * If we have issue MongooseServerSelectionError: connect ECONNREFUSED ::1:27017}
 * ===> change 'localhost' --> '127.0.0.1'
 */
const connectString = `mongodb://${host}:${port}/${name}`;

// Use Singleton Design Pattern
class Database {
  constructor(type = "mongodb") {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    //dev
    if (process.env.NODE_ENV == "dev") {
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
