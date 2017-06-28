var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_g2fn8fff:1r4653fee7b45j2otfuf7lfd6g@ds141082.mlab.com:41082/heroku_g2fn8fff');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;
