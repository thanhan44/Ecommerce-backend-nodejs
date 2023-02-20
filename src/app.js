const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());

// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome Ecomerce!",
  });
});

// handling error

module.exports = app;
