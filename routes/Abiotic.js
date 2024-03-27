var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Abiotic', { title: 'Search Results for Class Abiotic' });
});

module.exports = router;