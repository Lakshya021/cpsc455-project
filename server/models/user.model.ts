import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Minimum password length is 6 characters"],
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      defaul: [],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    imageCategories: {
      type: Array<String>,
      default: [],
    },
    bio: {
      type: String,
      default: "",
      maxlength: 50,
    },
    images: {
      type: [{ id: String, url: String, description: String, likes: [] }],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// fires a function before doc is saved to db. In this case we create a salt, apply it to the password, then hash it.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // checks if password field has been modified (when a user has to reset their password, we update/save the
    // document with the resetPasswordToken, but we're not hashing a new password again.
    next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login in user

userSchema.statics.login = async function (usernameOrEmail, password) {
  const user = await this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect password");
};

userSchema.methods.getSignedToken = function () {
  // @ts-ignore
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};

const User = mongoose.model("user", userSchema);
export default User as any;
