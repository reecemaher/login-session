var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req,res,next){
  var username = req.body.username;

  username = username.trim();

  if(username.length ==0){
    res.redirect('login');
  }
  else{
    req.session.username = username;
    res.render('log',{name:username, pass:password});
  }

  var password = req.body.password;
  
  if(password == knockknock){
    res.render('log',{name:username, pass:password});
    console.log("welcome" + username + "your pass" + password);
  }
  else{
     res.redirect('/login')
  }
});

router.get('/log',function(req,res,next){
  res.render('log',{name:username, pass:password});
   console.log("welcome" + username + "your pass" + password)
});

module.exports = router;
