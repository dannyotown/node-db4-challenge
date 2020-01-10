const express = require("express");
const server = express();
const cors = require("cors");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

server.use(cors());
server.use(express.json());

server.use((req, res, next) => {
  console.log(
    `Method Used: ${req.method} --- URL Used: ${
      req.originalUrl
    } ---- TimeStamp: ${new Date()} `
  );
  next();
});

server.use((err, req, res, next) => {
  console.log(err),
    res.status(500).json({
      message: "Internal error occured, please try again later!"
    });
});
server.listen(port, host, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
