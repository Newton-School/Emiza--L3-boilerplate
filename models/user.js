var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      async validator(value) {
        const emailexist = await checkEmailExists(User, value);
        return !emailexist;
      },
      message: "Email already exists",
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  registrationdate: {
    type: Date,
    default : Date.now(),
  },

  tasks : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task'
  }]

});

const User = mongoose.model("User", userSchema);

async function checkEmailExists(User, email) {
  const count = await User.countDocuments({ email });
  return count !== 0;
}

module.exports = User;
