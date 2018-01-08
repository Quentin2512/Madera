var express = require('express');
var router = express.Router();
var schemas = require('schemas.js');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.ejs');
});

router.post('/home', function (req, res, next) {
	var data = {
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

	res.render(page);
});

router.get('/commercial/createDevis', function (req, res, next) {
	var types = [];
	client.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			for(var i = 0; i < results.length; i++){
				types[i].id = results[i]._id;
				types[i].nom = results[i].nom;
				types[i].prenom = results[i].prenom;
				types[i].mail = results[i].mail;
				types[i].telephone = results[i].telephone;
			}
		}
	});

	res.render('commercial/createDevis.ejs', { clients: types });
});

router.get('/commercial/createPlan', function(req, res, next){
	var data = {
		nomProjet: req.body.nomProjet,
		idClient: req.body.client,
		numAdresse: req.body.numClient,
		libAdresse: req.body.adresseClient,
		posAdresse: req.body.postalClient,
		vilAdresse: req.body.villeClient,
		payAdresse: req.body.paysClient
	};

	var idAdresse = '';
	adresse.find().sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			if(results.length > 0){
				for(var i = 0; i < results.length; i++){
					idAdresse = results[i]._id;
				}
			}
			else{
				adresse.create([
					{
						libelle: data.libAdresse,
						numero: data.numAdresse,
						code_postal: data.posAdresse,
						ville: data.vilAdresse,
						pays: data.payAdresse
					}
				], function(error, data){
					if(error) return next(error);
					else{
						adresse.find({
							libelle: data.libAdresse,
							numero: data.numAdresse,
							code_postal: data.posAdresse,
							ville: data.vilAdresse,
							pays: data.payAdresse
						}).sort('_id').exec(function(error, results2){
							if(error) return next(error);
							else{
								for(var i = 0; i < results2.length){
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

	res.render('commercial/createPlan.ejs', { data: newData });
});

router.get('/commercial/confirmCreation', function(req, res, next){

});

module.exports = router;
