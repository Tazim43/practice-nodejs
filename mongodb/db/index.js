const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Courses",
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  purchasedCourses: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Courses",
    },
  ],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admins", AdminSchema);
const User = mongoose.model("Users", userSchema);
const Course = mongoose.model("Courses", courseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
