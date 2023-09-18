const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "add a task please"],
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

//650889e42ad950d2685c04c2

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
