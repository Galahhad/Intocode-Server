const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  learnWeek: {
    type: Number,
    default: 1,
  },
  learnEnd: {
    type: Boolean,
    default: false,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
