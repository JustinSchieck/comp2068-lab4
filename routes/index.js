/**
* @Author: Justin Schieck
* @Date:   2017-02-03T13:01:31-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-03T13:39:55-05:00
*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

router.get('/dene', function(req, res, next) {
  res.render('dene');
});

router.get('/denise', function(req, res, next) {
  res.render('denise');
});

router.get('/kira', function(req, res, next) {
  res.render('kira');
});

module.exports = router;
