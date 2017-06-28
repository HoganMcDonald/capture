var mongoose = require('mongoose');

mongoose.connect('localhost:27017/Capture');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
