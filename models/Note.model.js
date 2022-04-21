const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    default: null,
  },
  text: {
    type: String,
    default: "",
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
