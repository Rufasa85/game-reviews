var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models');

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
	res.render('index')
});

app.get('/plays', function(req, res) {
	res.render('/plays/index')
});

app.get('/games', function(req, res) {
	db.game.findAll().then(function(games) {
		res.render('games/index', {games:games})
	})
});

app.get('/games/new', function(req,res) {
	res.render('games/new')
});

app.get('/games/:id', function(req,res) {
	db.game.find({where: {id:req.params.id}}).then(function(game) {
		res.render('games/show', {game:game})
	})
});

app.delete('/games/:id', function(req,res) {
	db.games.find({where: {id:req.params.id}}).then(function(game) {
		db.games.destroy().then(function(){
			res.redirect('/games');
		})
	})
})

app.get('/about', function(req, res) {
	res.render('about')
});

app.post('/games', function (req, res) {
	db.game.create({
		title:req.body.title,
		score:parseFloat(req.body.score),
		description:req.body.description
	 }).then(function(game) {
		res.redirect('/games');
	 });
});

app.listen(3000);