//requires
var express = require('express');
var app = express();
var index = require('./modules/index');

//globals
var port = process.env.PORT || 7575;

//uses
app.use(express.static('public'));
app.use('/', index);


//spin up server
app.listen(port, function() {
  console.log('server up on port', port);
});
