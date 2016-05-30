var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('content/index', { title: 'Astronomy' });
});

module.exports = router;
