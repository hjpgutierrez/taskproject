const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

const fields = {
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message(props) {
        return `${props.value} is not a valid email`;
      },
    },
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
};

const user = new Schema(fields, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

user.virtual("name").get(function () {
  return this.firstname + " " + this.lastname;
});

user.methods.toJSON = function () {
  const doc = this.toObject();
  delete doc.password;
  return doc;
};

module.exports = {
  Model: mongoose.model("user", user),
  fields,
};
