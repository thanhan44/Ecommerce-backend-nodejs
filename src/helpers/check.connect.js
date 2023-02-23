"use strict";

const os = require("os");
const process = require("process");
const mongoose = require("mongoose");
const _SECONDS = 5000;

// Check number user connect database
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

/*
 * Check over load
 * Output example:
 * Active connections::1
   Memory use::50.671875 MB
 */
const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUseage = process.memoryUsage().rss;
    // Example maxium number of coonection based on number of cores
    const maxConnections = numCores * 5;

    console.log(`Active connections::${numConnections}`);
    console.log(`Memory use::${memoryUseage / 1024 / 1024} MB`);

    if (numConnections > maxConnections) {
      console.log(`Connection overload detected!`);
      //notify.send(....)
    }
  }, _SECONDS); // Monitor every 5 seconds
};

module.exports = { countConnect, checkOverload };
