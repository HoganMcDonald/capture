//requires
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcrypt');
var user = require('./user');

//uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

//base url
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//login route
router.post('/', function(req, res) {
  user.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      res.send('we don\'t got it');
    } else {
      if (user != undefined) {
        bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
          if (err) {
            res.send('we don\'t got it');
          } else {
            if (isMatch) {
              res.send('we got it');
            } else {
              res.send('we don\'t got it');
            }
          }
        });
      } else {
        res.send('we don\'t got it');
      }
    }
  });
});

//export
module.exports = router;
