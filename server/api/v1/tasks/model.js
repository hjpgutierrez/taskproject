const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
};

const task = new Schema(Object.assign(fields, references), {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
});

task.methods.toJSON = function () {
  const doc = this.toObject();
  return doc;
};

module.exports = {
  Model: mongoose.model("task", task),
  fields,
  references,
};
