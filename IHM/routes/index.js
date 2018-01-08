var express = require('express');
var router = express.Router();
var schemas = require('./schemas.js');
var mongoose = require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://Madera:madera@ds161306.mlab.com:61306/madera';
var typeUtilisateur = mongoose.model('type_utilisateur');
var client = mongoose.model('client');
var adresse = mongoose.model('adresse');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.ejs');
});

router.post('/home', function (req, res, next) {
	/*var data = {
		login:req.body.login,
		password:req.body.password,
		type:req.body.type
	};

	var page = 'home.ejs';

	switch(data.type){
		case "commercial":

			page = 'commercial/home.ejs';
			break;
	}

	res.render(page);*/

	var data = {
		login: req.body.login,
		password: req.body.password
	};

	res.render('home.ejs', {
		data: data
	});
});

router.get('/commercial/createDevis', function (req, res, next) {
	var types = new Array(String);
	client.find().sort('nom').exec(function (error, results) {
		if (error) return next(error);
		else {
			for (var i = 0; i < results.length; i++) {
				types[i].id = results[i]._id;
				types[i].nom = results[i].nom;
				types[i].prenom = results[i].prenom;
				types[i].mail = results[i].mail;
				types[i].telephone = results[i].telephone;
				//console.log(types[i].id + " - " + types[i].nom + " - " + types[i].prenom + " - " + types[i].mail + " - " + types[i].telephone);
			}
		}
	});

	res.render('commercial/createDevis.ejs', { clients: types });

});

router.post('/commercial/createPlan', function (req, res, next) {
	var data = {
		nomProjet: req.body.nomProjet,
		idClient: req.body.client,
		numAdresse: req.body.numClient,
		libAdresse: req.body.adresseClient,
		posAdresse: req.body.postalClient,
		vilAdresse: req.body.villeClient,
		payAdresse: req.body.paysClient
	};
	console.log(data.nomProjet + " - " + data.idClient);
	console.log(data.numAdresse + ", " + data.libAdresse);
	console.log(data.posAdresse + " " + data.vilAdresse + ", " + data.payAdresse);

	/*var idAdresse = '';
	adresse.find().sort('_id').exec(function (error, results) {
		if (error) return next(error);
		else {
			if (results.length > 0) {
				for (var i = 0; i < results.length; i++) {
					idAdresse = results[i]._id;
				}
			} else {
				adresse.create([
					{
						libelle: data.libAdresse,
						numero: data.numAdresse,
						code_postal: data.posAdresse,
						ville: data.vilAdresse,
						pays: data.payAdresse
					}
				], function (error, data) {
					if (error) return next(error);
					else {
						adresse.find({
							libelle: data.libAdresse,
							numero: data.numAdresse,
							code_postal: data.posAdresse,
							ville: data.vilAdresse,
							pays: data.payAdresse
						}).sort('_id').exec(function (error, results2) {
							if (error) return next(error);
							else {
								for (var i = 0; i < results2.length; i++) {
									idAdresse = results2[i]._id;
								}
							}
						});
					}
				});
			}
		}
	});

	var newData = {
		nomProjet: data.nomProjet,
		dateProjet: Date.now(),
		idClient: data.idClient,
		idAdresse: idAdresse
	}

	res.render('commercial/createPlan.ejs', {
		data: newData
	});*/
});

router.get('/commercial/confirmCreation', function (req, res, next) {

});

module.exports = router;
