var express = require('express');
var router = express.Router();
var clock = require('../clock/FuzzyClock');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(clock.getTime());
});

module.exports = router;
