const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true],
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
  });
  adminSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
      }
      next();
    });
  
    adminSchema.methods.matchPassword = async function (password) {
      return await bcrypt.compare(password,this.password);
    };
  
    adminSchema.methods.generateToken = function () {
      return jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    }

  module.exports = mongoose.model("Admin", adminSchema);