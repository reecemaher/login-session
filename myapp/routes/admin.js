var express = require('express');
var router = express.Router();

var getJokeIndex = function(allJokes, JokeID){
    var jokeIndex = -1;

    for(var i=0; i < allJokes.length; i++){
        if(allJokes[i].id == jokeID){
            jokeIndex = i;
        }
    }

    return jokeIndex;
}

router.get('/createJoke', function(req,res,next){
    res.render('log')
});

router.post('/newJoke', function(req,res,next){
    var joke ={};
    joke.id = req.session.jokeCounter++;
    joke.date = new Date();
    joke.joke = req.body.theJoke;
    console.log("Just created a joke on " + joke.date.toLocaleDateString());
    req.session.allJokes.push(joke);

    res.redirect('/');
});

router.get('/delete/:id', function(req,res,next){
  console.log("Deleting joke " + req.params.id);
    if(req.params.id){
        var jokeIndex = getJokeIndex(req.session.allJokes, req.params.id);

        if(jokeIndex != -1) {
            req.session.allJokes.splice(jokeIndex, 1);
        }
    }
    res.redirect('/')
});

router.get('/edit', function(req,res,next){

    console.log("Editing joke " + req.query.id);
    if(req.query.id){
        var jokeIndex = getJokeIndex(req.session.allJokes, req.query.id);

        if(jokeIndex !=-1) {
            res.render('log', {joke: req.session.allJokes[jokeIndex]});
        }
        else{
            res.redirect('/');
        }
    }
});

router.post('/editJoke', function(req,res,next){
    var jokeID = req.body.id;

    var jokeIndex = getJokeIndex(req.session.allJokes, req.body.id);

    if(jokeIndex != -1){
        req.session.allJokes[jokeIndex].joke = req.body.theJoke;
    }

    res.redirect('/')
});

/* GET users listing. */


module.exports = router;
