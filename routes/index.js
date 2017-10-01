var express = require('express');
var router = express.Router();
var multer = require('multer');
path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/', multer({dest: './uploads/'}).single('upl'), function(req,res){
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});

module.exports = router;
