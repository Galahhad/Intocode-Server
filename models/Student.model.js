const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    default: null,
  },
  pay: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "",
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
