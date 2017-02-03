/**
* @Author: Justin Schieck
* @Date:   2017-02-01T13:26:31-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-03T13:20:12-05:00
*/

//express
let express = require('express');
let router = express.Router();

/*GET books main page*/
router.get('/', function(req, res, next){
  res.render('family/index');
});

//make this file public
module.exports = router;
