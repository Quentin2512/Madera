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
//var gamme_composant = mongoose.model('gamme_composant');
var composant = mongoose.model('composant');
var caracteristique_gamme = mongoose.model('caracteristique_gamme');
var gamme = mongoose.model('gamme');
var qualite_gamme = mongoose.model("qualite_gamme");
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

	/* insertion type_utilisateur */
	db.collection("type_utilisateur").insertMany([
		{
			libelle:'fournisseur',
			societe:'Pro Bois'
		},
		{
			libelle:'fournisseur',
			societe:'Super Metal'
		},
		{
			libelle:'fournisseur',
			societe:'Max Materiaux'
		},
		{
			libelle:'commercial',
			societe:'Madera'
		},
		{
			libelle:'etudes',
			societe:'Madera'
		},
		{
			libelle:'administrateur',
			societe:'Madera'
		}
	], function(err, res){
		if(err) throw err;
		else console.log("Number of documents inserted: " + res.insertedCount);
	});

	/* récupération adresse */
	adresse.find().sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var idAdresse1=results[0]._id;
			var idAdresse2=results[1]._id;

			/* récupération type_utilisateur */
			typeUtilisateur.find({libelle:'fournisseur'}).sort('_id').exec(function(error2, results2){
				if(error2) return next(error2);
				else{
					var idType1=results2[0]._id;
					var idType2=results2[1]._id;

					typeUtilisateur.find({libelle:'commercial'}).sort('_id').exec(function(error3, results3){
						if(error3) return next(error3);
						else{
							var idType3=results3[0]._id;

							typeUtilisateur.find({libelle:'etudes'}).sort('_id').exec(function(error4, results4){
								if(error4) return next(error4);
								else{
									var idType4=results4[0]._id;
									typeUtilisateur.find({libelle:'administrateur'}).sort('_id').exec(function(error5, results5){
										if(error5) return next(error5);
										else{
											var idType5=results5[0]._id;

											/* insertion utilisateur */
											db.collection("utilisateur").insertMany([
												{
													nom:'SAINT REQUIER',
													prenom:'François',
													mail:'fsaintrequier@cesi.fr',
													telephone:'0123456789',
													login:'fsaintrequier',
													mdp:'fsaintrequier',
													adresse:idAdresse1,
													type:idType3
												},
												{
													nom:'DESCHAMPS',
													prenom:'Agnes',
													mail:'adeschamps@cesi.fr',
													telephone:'0123456789',
													login:'adeschamps',
													mdp:'adeschamps',
													adresse:idAdresse1,
													type:idType4
												},
												{
													nom:'MARTIN',
													prenom:'David',
													mail:'dmartin@cesi.fr',
													telephone:'0123456789',
													login:'dmartin',
													mdp:'dmartin',
													adresse:idAdresse2,
													type:idType1
												},
												{
													nom:'URUNUELA',
													prenom:'Richard',
													mail:'rurunuela@cesi.fr',
													telephone:'0123456789',
													login:'rurunuela',
													mdp:'rurunuela',
													adresse:idAdresse2,
													type:idType2
												},
												{
													nom:'BLERIOT',
													prenom:'Alexandre',
													mail:'alexandre.bleriot@viacesi.fr',
													telephone:'0123456789',
													login:'ableriot',
													mdp:'ableriot',
													adresse:idAdresse2,
													type:idType5
												}
											], function(err, res){
												if(err) throw err;
												else console.log("Number of documents inserted: " + res.insertedCount);
											});

											/* insertion client */
											db.collection("client").insertMany([
												{
													nom:'DIGUERRE',
													prenom:'Robin',
													mail:'robin.diguerre@viacesi.fr',
													telephone:'0123456789',
													adresse:idAdresse1
												},
												{
													nom:'HERTEREAU',
													prenom:'Quentin',
													mail:'quentin.hertereau@viacesi.fr',
													telephone:'0123456789',
													adresse:idAdresse1
												}
											], function(err, res){
												if(err) throw err;
												else console.log("Number of documents inserted: " + res.insertedCount);
											});
										}
									});
								}
							});
						}
					});
				}
			});
		}
	});

	/* récupération caracteristique_gamme */
	caracteristique_gamme.find({type:'isolant'}).sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var idIsolant1 = results[0]._id;
			var idIsolant2 = results[1]._id;

			caracteristique_gamme.find({type:'couverture'}).sort('_id').exec(function(error2, results2){
				if(error2) return next(error2);
				else{
					var idCouverture1 = results2[0]._id;
					var idCouverture2 = results2[1]._id;

					caracteristique_gamme.find({type:'huisserie'}).sort('_id').exec(function(error3, results3){
						if(error3) return next(error3);
						else{
							var idHuisserie1 = results3[0]._id;
							var idHuisserie2 = results3[1]._id;

							caracteristique_gamme.find({type:'finition_exterieure'}).sort('_id').exec(function(error4, results4){
								if(error4) return next(error4);
								else{
									var idFinition1 = results4[0]._id;
									var idFinition2 = results4[1]._id;

									/* insertion gamme */
									db.collection("gamme").insertMany([
										{
											nom:'Classique',
											caracteristique_gamme:[
												idIsolant1,
												idCouverture1,
												idHuisserie1,
												idFinition1
											]
										},
										{
											nom:'Moderne',
											caracteristique_gamme:[
												idIsolant2,
												idCouverture2,
												idHuisserie2,
												idFinition2
											]
										}
									], function(err, res){
										if(err) throw err;
										else console.log("Number of documents inserted: " + res.insertedCount);
									});
								}
							});
						}
					});
				}
			});
		}
	});

	/* insertion gamme_composant */
	/*db.collection("gamme_composant").insertMany([
		{
			nom:'Lowcost',
			niveau:'0'
		},
		{
			nom:'Standard',
			niveau:'1'
		},
		{
			nom:'Premium',
			niveau:'2'
		}
	], function(err, res){
		if(err) throw err;
		else console.log("Number of documents inserted: " + res.insertedCount);
	});*/

	/* insertion famille_composant */
	db.collection("famille_composant").insertMany([
		{
			nom:'Montant'
		},
		{
			nom:'Panneau'
		},
		{
			nom:'Plancher'
		},
		{
			nom:'Couverture'
		},
		{
			nom:'Element de montage'
		}
	], function(err, res){
		if(err) throw err;
		else console.log("Number of documents inserted: " + res.insertedCount);
	});

	/* récupération famille_composant */
	famille_composant.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			var famCouverture = results[0]._id;
			var famMontage = results[1]._id;
			var famMontant = results[2]._id;
			var famPanneau = results[3]._id;
			var famPlancher = results[4]._id;

			/* récupération gamme_composant */
			gamme_composant.find().sort('niveau').exec(function(error1, results1){
				if(error1) return next(error1);
				else{
					var gamLowcost = results1[0]._id;
					var gamStandard = results1[1]._id;
					var gamPremium = results1[2]._id;

					/* récupération utilisateur */
					utilisateur.find({prenom:'François'}).sort().exec(function(error2, results2){
						if(error2) return next(error2);
						else{
							var idCommercial = results2[0]._id;

							/* insertion composant */
							db.collection("composant").insertMany([
								{
									libelle:"Montant 2600x120x45",
									caracteristique:[
										"2600 mm",
										"120 mm",
										"45 mm"
									],
									prix:"10",
									utilisateur:idCommercial,
									famille_composant:famMontant
								}
							], function(err, res){
								if(err) throw err;
								else console.log("Number of documents inserted: " + res.insertedCount);
							});
						}
					});
				}
			});
		}
	});
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
            console.log(results);
			for (var i = 0; i < results.length; i++) {
                types[i] = {
                    id: results[i]._id,
                    nom: results[i].nom,
                    prenom: results[i].prenom,
                    mail: results[i].mail,
                    telephone: results[i].telephone
                }
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
