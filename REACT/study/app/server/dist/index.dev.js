"use strict";

var express = require('express');

var app = express();
var PORT = 8085;
var fakeEmails = [{
  id: 1,
  topic: 'email_1',
  favorite: true
}, {
  id: 2,
  topic: 'email_2'
}, {
  id: 3,
  topic: 'email_3'
}, {
  id: 4,
  topic: 'email_4'
}, {
  id: 5,
  topic: 'email_5'
}];
app.get('/api/emails/', function (req, res) {
  res.send(fakeEmails);
});
app.listen(PORT, function () {
  console.log("Server listening on port: ".concat(PORT));
});