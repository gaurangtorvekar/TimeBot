var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Ngrok is working! Path Hit: ' + req.url);
});

module.exports = router;
