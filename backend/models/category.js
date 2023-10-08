const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "category name cannot exceed 100 char"],
  },
});

module.exports = mongoose.model("category", categorySchema);
