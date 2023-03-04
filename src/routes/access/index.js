"use strict";

const express = require("express");
const accessController = require("../../controllers/access.controller");
const router = express.Router();

// SignUp
// router.get("", (req, res, next) => {
//   return res.status(200).json({
//     message: "Welcome router access!",
//   });
// });

router.post("/shop/signup", accessController.signUp);

module.exports = router;
