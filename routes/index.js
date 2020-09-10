var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next){
  var item = {
    name: req.body.name,
    age: req.body.age
  }
  res.render('form-data', {item: item});
})

router.get('/list', function(req, res, next){
  res.render('all_infos', {title: 'helo'});
})
module.exports = router;
