var express = require('express');
var router = express.Router();

var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newnote', function(req, res) {
  return standupCtrl.getNode(req, res);
})

module.exports = router;
