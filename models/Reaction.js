const { Schema, model, Types } = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    //   validate: [
    //     validator({
    //       validator: "isLength",
    //       arguments: [1, 280],
    //       message: "Reaction should be no more than 280 characters",
    //     }),
    //   ],
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //create a mothod to format timestamp in the utils/format.js
      // call the method here
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;
