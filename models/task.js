var mongoose = require("mongoose");

var taskSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    enum: ['pending', 'done'],
    default: 'pending'
  },
  creationdate: {
    type: Date,
    default : Date.now(),
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }   
});


module.exports = mongoose.model("Task", taskSchema);;