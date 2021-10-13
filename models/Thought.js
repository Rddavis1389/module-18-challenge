const { Schema, model } = require("mongoose");

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      //   validate: [
      //     validator({
      //       validator: "isLength",
      //       arguments: [1, 280],
      //       message: "Name should be between 1 and 280 characters",
      //     }),
      //   ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //create a mothod to format timestamp in the utils/format.js
      // call the method here
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
