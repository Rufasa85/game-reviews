var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
	res.render('index')
});

app.get('/plays', function(req, res) {
	res.render('plays/index')
});

app.get('/games', function(req, res) {
	res.render('games/index')
});

app.get('/games/:id', function(req,res) {
	res.render('games/show', {game:req.params.id})
})

app.get('/about', function(req, res) {
	res.render('about')
});

app.listen(3000);