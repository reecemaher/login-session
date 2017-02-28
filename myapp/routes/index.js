var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  username = username.trim();

  if(username.length ==0 || password.length == 0 || password != 'knock'){
    res.redirect('login');
  }
  else{
    req.session.username = username;
    res.render('log',{name:username, pass:password});
  }
});

router.get('/log',function(req,res,next){
  res.render('log',{name:username, pass:password});
});

module.exports = router;
