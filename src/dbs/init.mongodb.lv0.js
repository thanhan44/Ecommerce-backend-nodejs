/*
 * This file is used to connect MongoDB
 * It's just example
 * We do not use it because code is not performance
 */
"use strict";

const mongoose = require("mongoose");

/*
 * If we have issue MongooseServerSelectionError: connect ECONNREFUSED ::1:27017}
 * ===> change 'localhost' --> '127.0.0.1'
 */
const connectString = `mongodb://127.0.0.1:27017/Ecommerce_dev`;

// mongoose.set("strictQuery", false);
mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.error(`Error Connect!::${err}}`));

// dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
