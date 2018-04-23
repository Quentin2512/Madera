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

	//insertion type_utilisateur
	/*db.collection("type_utilisateur").insertMany([
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
		else console.log("Number of 'type_utilisateur' inserted: " + res.insertedCount);
	});*/

    //insertion adresse
	/*db.collection("adresse").insertMany([
		{
			libelle:'rue de Grèce',
			numero:'2',
            code_postal:'72100',
            ville:'Le Mans',
            pays:'France'
		},
		{
			libelle:'rue de la mariette',
			numero:'13',
            code_postal:'72000',
            ville:'Le Mans',
            pays:'France'
		},
		{
			libelle:'rue de l\'Avion',
			numero:'25',
            code_postal:'49000',
            ville:'Angers',
            pays:'France'
		},
	], function(err, res){
		if(err) throw err;
		else console.log("Number of 'adresse' inserted: " + res.insertedCount);
	});*/

	//récupération adresse
	/*adresse.find().sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var idAdresse1=results[0]._id;
			var idAdresse2=results[1]._id;
			var idAdresse3=results[1]._id;

			//récupération type_utilisateur
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

											//insertion utilisateur
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
												else console.log("Number of 'utilisateur' inserted: " + res.insertedCount);
											});

											//insertion client
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
												else console.log("Number of 'client' inserted: " + res.insertedCount);
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
	});*/

	//insertion type_utilisateur
	/*db.collection("famille_composant").insertMany([
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
		else console.log("Number of 'famille_composant' inserted: " + res.insertedCount);
	});*/

    //récupération famille_composant
    /*famille_composant.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			var famCouverture = results[0]._id;
			var famMontage = results[1]._id;
			var famMontant = results[2]._id;
			var famPanneau = results[3]._id;
			var famPlancher = results[4]._id;

			//récupération utilisateur
            utilisateur.find({nom:'URUNUELA'}).sort().exec(function(error2, results2){
                if(error2) return next(error2);
                else{
                    var idCommercial = results2[0]._id;

                    //insertion composant
                    db.collection("composant").insertMany([
                        {
                            libelle:"Montant 2600x120x45",
                            caracteristique:[
                                "2600 mm",
                                "120 mm",
                                "45 mm"
                            ],
                            prix:"15",
                            utilisateur:idCommercial,
                            famille_composant:famMontant
                        },
                        {
                            libelle:"Couverture 3800x3800x1000",
                            caracteristique:[
                                '3800 mm',
                                '3800 mm',
                                '1000 mm'
                            ],
                            prix:"20",
                            utilisateur:idCommercial,
                            famille_composant:famCouverture
                        },
                        {
                            libelle:"Panneau 2600x3800x30",
                            caracteristique:[
                                "2600 mm",
                                "3800 mm",
                                "30 mm"
                            ],
                            prix:"15",
                            utilisateur:idCommercial,
                            famille_composant:famPanneau
                        },
                        {
                            libelle:"Plancher 3800x3800x50",
                            caracteristique:[
                                "3800 mm",
                                "3800 mm",
                                "50 mm"
                            ],
                            prix:"30",
                            utilisateur:idCommercial,
                            famille_composant:famMontant
                        }
                    ], function(err, res){
                        if(err) throw err;
                        else console.log("Number of 'composant' inserted: " + res.insertedCount);
                    });
                }
            });
		}
	});*/

    //récupération composant
	/*composant.find().sort('_id').exec(function(error, results){
		if(error) return next(error);
		else{
			var comMontant = results[0]._id;
			var comCouverture = results[1]._id;
			var comPanneau = results[2]._id;
			var comPlancher = results[3]._id;

			//insertion module
            db.collection("module").insertMany([
                {
                    nom:'Mur - 1',
                    composant:[
                        {
                            id_composant:comMontant,
                            nb:'2'
                        },
                        {
                            id_composant:comPanneau,
                            nb:'1'
                        }
                    ]
                },
                {
                    nom:'Couverture - 1',
                    composant:[
                        {
                            id_composant:comCouverture,
                            nb:'1'
                        }
                    ]
                },
                {
                    nom:'Plancher - 1',
                    composant:[
                        {
                            id_composant:comPlancher,
                            nb:'1'
                        }
                    ]
                }
            ], function(err, res){
                if(err) throw err;
                else console.log("Number of 'module' inserted: " + res.insertedCount);
            });
		}
	});*/

    //insertion caracteristique_gamme
	/*db.collection("caracteristique_gamme").insertMany([
		{
			nom:'Finition extérieure',
            type:'bois'
		},
		{
			nom:'Finition extérieure',
            type:'crépis'
		},
		{
			nom:'Isolant',
            type:'synthétique'
		},
		{
			nom:'Isolant',
            type:'naturel'
		},
		{
			nom:'Isolant',
            type:'biologique'
		},
		{
			nom:'Couverture',
            type:'tuiles'
		},
		{
			nom:'Couverture',
            type:'ardoise'
		}
	], function(err, res){
		if(err) throw err;
		else console.log("Number of 'caracteristique_gamme' inserted: " + res.insertedCount);
	});*/

    //insertion qualite_gamme
	/*db.collection("qualite_gamme").insertMany([
		{
			nom:'lowcost',
            type:'0.5'
		},
		{
			nom:'normal',
            type:'1'
		},
		{
			nom:'premium',
            type:'1.5'
		}
	], function(err, res){
		if(err) throw err;
		else console.log("Number of 'qualite_gamme' inserted: " + res.insertedCount);
	});*/

    //récupération module
    /*modulo.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			var modMur = results[0]._id;
			var modCouverture = results[1]._id;
			var modPlancher = results[2]._id;

			//récupération caracteristique_gamme
            caracteristique_gamme.find().sort('nom').exec(function(error2, results2){
                if(error2) return next(error2);
                else{
                    var carFinBois = results2[0]._id;
                    var carFinCrepis = results2[1]._id;
                    var carIsoSynthetique = results2[2]._id;
                    var carIsoNaturel = results2[3]._id;
                    var carIsoBiologique = results2[4]._id;
                    var carCouvTuiles = results2[5]._id;
                    var carCouvArdoise = results2[6]._id;

                    //récupération qualite_gamme
                    qualite_gamme.find().sort('nom').exec(function(error3, results3){
                        if(error3) return next(error3);
                        else{
                            var quaLowcost = results3[0]._id;
                            var quaNormal = results3[1]._id;
                            var quaPremium = results3[2]._id;

                            //insertion gamme
                            db.collection("gamme").insertMany([
                                {
                                    nom:'Bois / Biologique / Ardoise - 1',
                                    caracteristique_gamme: [
                                        carFinBois,
                                        carIsoBiologique,
                                        carCouvArdoise
                                    ],
                                    qualite_gamme: quaLowcost,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                },
                                {
                                    nom:'Bois / Biologique / Ardoise - 2',
                                    caracteristique_gamme: [
                                        carFinBois,
                                        carIsoBiologique,
                                        carCouvArdoise
                                    ],
                                    qualite_gamme: quaNormal,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                },
                                {
                                    nom:'Bois / Biologique / Ardoise - 3',
                                    caracteristique_gamme: [
                                        carFinBois,
                                        carIsoBiologique,
                                        carCouvArdoise
                                    ],
                                    qualite_gamme: quaPremium,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                },
                                {
                                    nom:'Crepis / Synthétique / Tuiles - 1',
                                    caracteristique_gamme: [
                                        carFinCrepis,
                                        carIsoSynthetique,
                                        carCouvTuiles
                                    ],
                                    qualite_gamme: quaLowcost,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                },
                                {
                                    nom:'Crepis / Synthétique / Tuiles - 2',
                                    caracteristique_gamme: [
                                        carFinCrepis,
                                        carIsoSynthetique,
                                        carCouvTuiles
                                    ],
                                    qualite_gamme: quaNormal,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                },
                                {
                                    nom:'Crepis / Synthétique / Tuiles - 3',
                                    caracteristique_gamme: [
                                        carFinCrepis,
                                        carIsoSynthetique,
                                        carCouvTuiles
                                    ],
                                    qualite_gamme: quaPremium,
                                    module:[
                                        {
                                            id_module: modMur,
                                            nb: '10'
                                        },
                                        {
                                            id_module: modCouverture,
                                            nb: '3'
                                        },
                                        {
                                            id_module: modPlancher,
                                            nb: '3'
                                        }
                                    ]
                                }
                            ], function(err, res){
                                if(err) throw err;
                                else console.log("Number of 'gamme' inserted: " + res.insertedCount);
                            });
                        }
                    });
                }
            });
		}
	});*/

    //récupération module
    /*modulo.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			var modMur = results[0]._id;
			var modCouverture = results[1]._id;
			var modPlancher = results[2]._id;

            //insertion plan
            db.collection("plan").insertMany([
                {
                    nom:'Carre - 3p - 0',
                    nu_etage:'0',
                    image:'carre_3p',
                    module:[]
                },
                {
                    nom:'Carre - 3p - 1',
                    nu_etage:'1',
                    image:'carre_3p',
                    module:[
                        {
                            id_module: modPlancher,
                            nb: '3'
                        }
                    ]
                },
                {
                    nom:'Rond - 4p - 0',
                    nu_etage:'0',
                    image:'rond_4p',
                    module:[]
                },
                {
                    nom:'Rond - 4p - 1',
                    nu_etage:'1',
                    image:'rond_4p',
                    module:[
                        {
                            id_module: modPlancher,
                            nb: '4'
                        }
                    ]
                }
            ], function(err, res){
                if(err) throw err;
                else console.log("Number of 'plan' inserted: " + res.insertedCount);
            });
        }
    });*/

    //récupération gamme
    /*gamme.find().sort('nom').exec(function(error, results){
		if(error) return next(error);
		else{
			var gamBio1 = results[0]._id;
			var gamBio2 = results[1]._id;
			var gamBio3 = results[2]._id;
			var gamSyn1 = results[3]._id;
			var gamSyn2 = results[4]._id;
			var gamSyn3 = results[5]._id;

            //récupération gamme
            plan.find().sort('nom').exec(function(error, results){
                if(error) return next(error);
                else{
                    var planCarre0 = results[0]._id;
                    var planCarre1 = results[1]._id;
                    var planRond0 = results[2]._id;
                    var planRond1 = results[3]._id;

                    //insertion modele_gamme
                    db.collection("modele_gamme").insertMany([
                        {
                            nom:'Carre - 1',
                            nb_etage:'2',
                            forme:'carre',
                            gamme:gamBio1,
                            plan:[
                                planCarre0,
                                planCarre1
                            ]
                        },
                        {
                            nom:'Carre - 2',
                            nb_etage:'2',
                            forme:'carre',
                            gamme:gamBio2,
                            plan:[
                                planCarre0,
                                planCarre1
                            ]
                        },
                        {
                            nom:'Carre - 3',
                            nb_etage:'2',
                            forme:'carre',
                            gamme:gamBio3,
                            plan:[
                                planCarre0,
                                planCarre1
                            ]
                        },
                        {
                            nom:'Rond - 1',
                            nb_etage:'2',
                            forme:'rond',
                            gamme:gamSyn1,
                            plan:[
                                planRond0,
                                planRond1
                            ]
                        },
                        {
                            nom:'Rond - 2',
                            nb_etage:'2',
                            forme:'rond',
                            gamme:gamSyn2,
                            plan:[
                                planRond0,
                                planRond1
                            ]
                        },
                        {
                            nom:'Rond - 3',
                            nb_etage:'2',
                            forme:'rond',
                            gamme:gamSyn3,
                            plan:[
                                planRond0,
                                planRond1
                            ]
                        },
                    ], function(err, res){
                        if(err) throw err;
                        else console.log("Number of 'modele_gamme' inserted: " + res.insertedCount);
                    });
                }
            });
        }
    });*/
});

router.post('/home', function (req, res, next) {
	var data = {
		login: req.body.login,
		password: req.body.password,
        nom: '',
        prenom: '',
        mail: '',
        telephone: '',
        adresse: '',
        type: ''
	};

    utilisateur.find({
        login: data.login,
        mdp: data.password
    }).sort('_id').exec(function (error, results) {
        if (error) return next(error);
		else {
            if (results.length > 0) {
                var idAdresse = 0;
                var idType = 0;
				for (var i = 0; i < results.length; i++) {
					data.nom = results[i].nom;
					data.prenom = results[i].prenom;
					data.mail = results[i].mail;
					data.telephone = results[i].telephone;
                    idAdresse = results[i].adresse;
                    idType = results[i].type;
				}
                adresse.find({
                    _id: idAdresse
                }).sort('_id').exec(function (error2, results2) {
                    if (error2) return next(error2);
                    else {
                        for (var i = 0; i < results2.length; i++) {
                            data.adresse = {
                                libelle: results2[i].libelle,
                                numero: results2[i].numero,
                                code_postal: results2[i].code_postal,
                                ville: results2[i].ville,
                                pays: results2[i].pays
                            }
                        }
                        typeUtilisateur.find({
                            _id: idType
                        }).sort('_id').exec(function (error2, results2) {
                            if (error2) return next(error2);
                            else {
                                for (var i = 0; i < results2.length; i++) {
                                    data.type = {
                                        libelle: results2[i].libelle,
                                        societe: results2[i].societe
                                    }
                                }
                                console.log(data);
                                res.render(data.type.libelle+'/home.ejs', {
                                    data: data
                                });
                            }
                        });
                    }
                });
			} else {
                res.render('error.ejs', {
                    error: 'Identifiant et/ou mot de passe incorrects.'
                });
            }
        }
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

router.post('/commercial/createDevisClient', function (req, res, next) {
    var nom = req.body.nomCreate;
    var prenom = req.body.prenomCreate;
    var mail = req.body.emailCreate;
    var telephone = req.body.phoneCreate;
    var libAdresse = req.body.libAdresseCreate;
    var numAdresse = req.body.numAdresseCreate;
    var cpAdresse = req.body.cpAdresseCreate;
    var villeAdresse = req.body.villeAdresseCreate;
    var paysAdresse = req.body.paysAdresseCreate;

    var idAdresse = '';
	adresse.find({
		libelle: libAdresse,
		numero: numAdresse,
		code_postal: cpAdresse,
		ville: villeAdresse,
		pays: paysAdresse
	}).sort('_id').exec(function (error, results) {
		if (error) return next(error);
		else {
			if (results.length > 0) {
				for (var i = 0; i < results.length; i++) {
					idAdresse = results[i]._id;
				}
                //insertion client
                db.collection("client").insertMany([
                    {
                        nom:nom,
                        prenom:prenom,
                        mail:mail,
                        telephone:telephone,
                        adresse:idAdresse
                    }
                ], function(error2, results2){
                    if(error2) throw error2;
                    else{
                        console.log("Number of 'client' inserted: " + results2.insertedCount);
                        res.redirect('/commercial/createDevis');
                    }
                });
			} else {
				adresse.create([
					{
						libelle: libAdresse,
						numero: numAdresse,
						code_postal: cpAdresse,
						ville: villeAdresse,
						pays: paysAdresse
					}
				], function (error2, data) {
					if (error2) return next(error2);
					else {
						adresse.find({
							libelle: libAdresse,
							numero: numAdresse,
							code_postal: cpAdresse,
							ville: villeAdresse,
							pays: paysAdresse
						}).sort('_id').exec(function (error3, results3) {
							if (error3) return next(error3);
							else {
								for (var i = 0; i < results3.length; i++) {
									idAdresse = results3[i]._id;
								}
                                //insertion client
                                db.collection("client").insertMany([
                                    {
                                        nom:nom,
                                        prenom:prenom,
                                        mail:mail,
                                        telephone:telephone,
                                        adresse:idAdresse
                                    }
                                ], function(error4, results4){
                                    if(error4) throw error4;
                                    else{
                                        console.log("Number of 'client' inserted: " + results4.insertedCount);
                                        res.redirect('/commercial/createDevis');
                                    }
                                });
							}
						});
					}
				});
			}
		}
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
});

router.post('/commercial/createPlanSearch', function (req, res, next) {
	var typeSearch = req.body.typeSearch;
	var data = req.body.data;
	var types = [];
	switch (typeSearch) {
		case "gamme":
			gamme.find().sort('nom').exec(function (error, results) {
				if (error) return next(error);
				else {
                    for (var i = 0; i < results.length; i++) {
                        types[i] = {
                            id: results[i]._id,
                            nom: results[i].nom,
                            qualite: ''+results[i].qualite_gamme
                        };
                    }
                    qualite_gamme.find().sort('nom').exec(function (error2, results2){
                        if(error2) return next(error2);
                        else{
                            for(var j=0 ; j<results2.length ; j++){
                                var idQualite = results2[j]._id;
                                var nomQualite = results2[j].nom;
                                for(var i=0 ; i<types.length ; i++){
                                    if(types[i].qualite == idQualite){
                                        types[i].qualite = nomQualite;
                                    }
                                }
                            }
                            res.send(JSON.stringify(types));
                        }
                    });
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
		case "plan":
            var k=0;
			modele_gamme.find({_id:data}).sort('nom').exec(function(error, results){
				if(error) return next(error);
				else {
                    var plans = results[0].plan;
					plan.find().sort().exec(function(error2, results2){
                        if(error2) return next(error2);
                        else{
                            for(var j=0 ; j<results2.length ; j++){
                                var idPlan = results2[j]._id;
                                for(var i=0 ; i<plans.length ; i++){
                                    if(""+plans[i] == ""+idPlan){
                                        types[k] = {
                                            id: results2[j]._id,
                                            nom: results2[j].nom,
                                            nu_etage: results2[j].nu_etage,
                                            image: results2[j].image
                                        };
                                        k++;
                                    }
                                }
                            }
                            res.send(JSON.stringify(types));
                        }
                    });
				}
			});
			break;
        case "modules":
            modulo.find().sort().exec(function(error, results){
                if(error) return next(error);
                else{
                    for(var i = 0; i < results.length; i++){
						types[i] = {
							id: results[i]._id,
							nom: results[i].nom
						};
					}
					res.send(JSON.stringify(types));
                }
            });
	}
});

router.post('/commercial/confirmCreation', function (req, res, next) {

});

router.get('/commercial/visualiserDevis', function (req, res, next) {
	res.render('commercial/visualiserDevis.ejs');
});

router.get('/etudes/gestionGammes', function (req, res, next) {
    res.render('etudes/gestionGammes.ejs');
});

router.get('/etudes/gestionModules', function (req, res, next) {
    res.render('etudes/gestionModules.ejs');
});

router.get('/etudes/creerModule', function (req, res, next) {
    res.render('etudes/creerModule.ejs');
});

router.get('/etudes/creerGamme', function (req, res, next) {
    res.render('etudes/creerGamme.ejs');
});

module.exports = router;
