const express = require("express");
const mongoose = require("mongoose");
const validator = require("mongoose-validator");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = server;
