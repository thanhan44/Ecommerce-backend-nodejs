const app = require("./src/app.js");
const {
  app: { port },
} = require("./src/configs/config.mongodb");

const PORT = port;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
  console.log(`Listening at http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
  //notify.send(ping..)
});
