const express = require("express");
const mongoose = require("mongoose");
const validator = require("mongoose-validator");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

// Mongoose Schemas
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [
      validator({
        validator: "isEmail",
        message: "Not a Valid Email",
      }),
    ],
  },
  // may need some more work
  thoughts: {
    array: [],
  },
  friends: {
    array: [],
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: [
      validator({
        validator: "isLength",
        arguments: [1, 280],
        message: "Name should be between 1 and 280 characters",
      }),
    ],
  },
  // may need more work
//   createdAt: {
//     timestamps: true,
//   },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    array: [],
  },
});

const reactionSchema = new mongoose.Schema({
  reactionId: mongoose.ObjectId,
  reactionBody: {
    type: String,
    required: true,
    validate: [
      validator({
        validator: "isLength",
        arguments: [1, 280],
        message: "Reaction should be no more than 280 characters",
      }),
    ],
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      timestamps: true,
    },
  },
});

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = server;
