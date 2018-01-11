var express = require('express');
var router = express.Router();
var schemas = require('./schemas.js');
var mongoose = require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://Madera:madera@ds161306.mlab.com:61306/madera';
var typeUtilisateur = mongoose.model('type_utilisateur');
var utilisateur = mongoose.model('utilisateur');
var client = mongoose.model('client');
var adresse = mongoose.model('adresse');
var famille_composant = mongoose.model('famille_composant');
var gamme_composant = mongoose.model('gamme_composant');
var composant = mongoose.model('composant');
var caracteristique_gamme = mongoose.model('caracteristique_gamme');
var gamme = mongoose.model('gamme');
var modulo = mongoose.model('module');
var plan = mongoose.model('plan');
var modele_gamme = mongoose.model('modele_gamme');
var devis = mongoose.model('devis');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.ejs');
});

router.get('/insertionDonnees', function(req, res, next){
	/* script insertion données à la base */
	/*gamme.create([
	{
		nom:'Classique'
	},
	{
		nom:'Moderne'
	}], function(error){
		if(error) return console.log(error);
  	});
	gamme.save(function (err, user) {
		if (err) return console.error(err);
		console.log('Gammes ajoutées !');
	});*/

	/*gamme.find({nom:'Classique'}).sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var idGamme=results[0]._id;
			db.collection("modele_gamme").insertMany([
				{
					nom:'CLA_1_CAR',
					nb_etage:'1',
					forme:'Carré',
					gamme:idGamme
				},
				{
					nom:'CLA_2_RON',
					nb_etage:'2',
					forme:'Rond',
					gamme:idGamme
				}], function(err, res) {
					if (err) throw err;
					console.log("Number of documents inserted: " + res.insertedCount);
  			});
		}
	});*//*

	gamme.find({nom:'Moderne'}).sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var idGamme=results[0]._id;
			db.collection("modele_gamme").insertMany([
				{
					nom:'MOD_1_CAR',
					nb_etage:'1',
					forme:'Carré',
					gamme:idGamme
				},
				{
					nom:'MOD_2_RON',
					nb_etage:'2',
					forme:'Rond',
					gamme:idGamme
				}], function(err, res) {
					if (err) throw err;
					console.log("Number of documents inserted: " + res.insertedCount);
  			});
		}
	});*/
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
		res.render('commercial/createDevis.ejs', {
			clients: types
		});
	});
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

	var idAdresse = '';
	adresse.find({
		libelle: data.libAdresse,
		numero: data.numAdresse,
		code_postal: data.posAdresse,
		ville: data.vilAdresse,
		pays: data.payAdresse
	}).sort('_id').exec(function (error, results) {
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
			var dateNow = new Date();
			var newData = {
				nomProjet: data.nomProjet,
				dateProjet: ("0" + dateNow.getDate()).substr(-2, 2) + "/" + ("0" + (dateNow.getMonth() + 1)).substr(-2, 2) + "/" + dateNow.getFullYear(),
				idClient: data.idClient,
				idAdresse: idAdresse
			}



			res.render('commercial/createPlan.ejs', {
				data: newData
			});
		}
	});


	/*res.render('commercial/createPlan.ejs', {
		data: newData
	});

	res.render('commercial/createPlan.ejs');*/
});

router.post('/commercial/createPlanSearch', function (req, res, next) {
	var typeSearch = req.body.typeSearch;
	var data = req.body.data;
	var types = {};
	switch (typeSearch) {
		case "gamme":
			gamme.find().sort('nom').exec(function (error, results) {
				if (error) return next(error);
				else {
					for (var i = 0; i < results.length; i++) {
						types[i] = {
							id: results[i]._id,
							nom: results[i].nom
						};
					}
					res.send(JSON.stringify(types));
				}
			});
			break;
		case "modele_gamme":
			modele_gamme.find({gamme:data}).sort('nom').exec(function(error, results){
				if(error) return next(error);
				else {
					for(var i = 0; i < results.length; i++){
						types[i] = {
							id: results[i]._id,
							nom: results[i].nom,
							nb_etage: results[i].nb_etage,
							forme: results[i].forme,
							gamme: results[i].gamme,
							plan: results[i].plan
						};
					}
					res.send(JSON.stringify(types));
				}
			});
			break;
	}
});

router.get('/commercial/confirmCreation', function (req, res, next) {

});

router.get('/commercial/visualiserDevis', function (req, res, next) {
	res.render('commercial/visualiserDevis.ejs');
});

module.exports = router;
