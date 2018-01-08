var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://Madera:madera@ds161306.mlab.com:61306/madera';
var Schema=mongoose.Schema;

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs', { error: err });
});

//base de données
db.on('error',function(){
  console.log('Erreur dans la communication avec la bdd');
});

//connexion
mongoose.connect(dbUrl,function(err){
  if(err){
    return console.log('Il y a un probleme de connection a la bdd : '+err);
  }
  console.log('Connecte a la bdd !');
	/*utilisateur.create([
		{
			nom:'DIGUERRE',
			prenom:'Robin',
			mail:'robin.diguerre@viacesi.fr',
			telephone:'9876543210',
			login:'robin',
			mdp:'diguerre'
		}], function(error){
			if(error) return console.log(error);
  });*/
	/*utilisateur.save(function (err, user) {
		if (err) return console.error(err);
		console.log('Utilisateur ajouté !');
	});*/
	/*
	//définition de la requete
	//var query = utilisateur.find({ nom:'BLERIOT' });
	var query = utilisateur.find({});
	//choix des champs a recuperer
	query.select('nom prenom login mdp');
	//execution de la requete
	query.exec(function (err, user) {
		if (err) return handleError(err);
		for(var i=0; i < user.length ; i++)
			console.log('%s %s  %s %s', user[i].nom, user[i].prenom, user[i].login, user[i].mdp);
		db.close();
  	process.exit();
	});*/


});

module.exports = app;
