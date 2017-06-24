//requires
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcrypt');
var pg = require('pg');

//uses
router.use(bodyParser.urlencoded({
  extended: true
}));

//base url
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//export
module.exports = router;
