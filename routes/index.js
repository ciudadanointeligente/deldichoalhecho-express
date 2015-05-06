var express = require('express');
var router = express.Router();
var path = require('path');
var jf = require('jsonfile');


var file_name = path.join(__dirname, 'json/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', jf.readFileSync(file_name));
});

module.exports = router;
