var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/** ---------------------------------------------------- Type utilisateur ----------------------------------------------**/

var typeUtilisateurSchema = new Schema({
	libelle:{
		type:String,
		required:true
	},
	societe:{
		type:String,
		required:true
	}
});

var typeUtilisateur = mongoose.model('type_utilisateur', typeUtilisateurSchema);

/** ------------------------------------------------------ utilisateur -------------------------------------------------**/

var utilisateurSchema = new Schema({
	nom:{
		type:String,
		required:true
	},
	prenom:{
		type:String,
		required:true
	},
	mail:{
		type:String,
		required:true
	},
	telephone:{
		type:String,
		required:true
	},
	login:{
		type:String,
		required:true
	},
	mdp:{
		type:String,
		required:true
	},
	adresse :{
        type:Schema.Types.ObjectId,
        required:true
    },
	type:{
		type:Schema.Types.ObjectId,
		required:true
	}
});

var utilisateur = mongoose.model('utilisateur', utilisateurSchema);

/** --------------------------------------------------------- Client ---------------------------------------------------**/

var clientSchema = new Schema({
	nom :{
        type:String,
        required:true
    },
	prenom : {
        type:String,
        required:true
    },
	mail :{
        type:String,
        required:true
    },
	telephone : {
        type:String,
        required:true
    },
	adresse :{
        type:Schema.Types.ObjectId,
        required:true
    }
});

var client = mongoose.model('client',clientSchema);

/** -------------------------------------------------------- Adresse --------------------------------------------------**/

var adresseSchema = new Schema({
    libelle : {
        type:String,
        required:true
    },
	numero : {
        type:String,
        required:true
    },
	code_postal : {
        type:String,
        required:true
    },
	ville : {
        type:String,
        required:true
    },
	pays : {
        type:String,
        required:true
    }
});

var adresse = mongoose.model('adresse',adresseSchema);

/** ---------------------------------------------------- famille_composant ----------------------------------------------**/

var famille_composantSchema = new Schema({
	nom : {
        type:String,
        required:true
	}
});

var famille_composant = mongoose.model('famille_composant',famille_composantSchema);

/** ---------------------------------------------------- gamme_composant ----------------------------------------------**/

/*var gamme_composantSchema = new Schema({
     nom:{
        type:String,
        required:true
    },
    niveau:{
        type:String,
        required:true
    }
});

var gamme_composant = mongoose.model('gamme_composant',gamme_composantSchema);*/

/** ---------------------------------------------------- composant ---------------------------------------------------**/

var composantSchema = new Schema({
    libelle : {
        type:String,
        required:true
    },
	caracteristique : {
        type:[String],
        required:true
    },
	prix : {
        type:String,
        required:true
    },
	utilisateur : {
        type:Schema.Types.ObjectId,
        required:true
    },
	gamme_composant : {
        type:Schema.Types.ObjectId,
        required:true
    },
	famille_composant : {
        type:Schema.Types.ObjectId,
        required:true
    }
});

var composant = mongoose.model('composant',composantSchema);

/** ------------------------------------------------ caracteristique_gamme -----------------------------------------------**/

var caracteristique_gammeSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	type : {
        type:String,
        required:true
    }
});

var caracteristique_gamme = mongoose.model('caracteristique_gamme',caracteristique_gammeSchema);

/** ---------------------------------------------------- gamme ----------------------------------------------------------**/

var gammeSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	caracteristique_gamme :{
        type:[Schema.Types.ObjectId],
        required:true
    }
});

var gamme = mongoose.model('gamme',gammeSchema);

/** ---------------------------------------------------- qualite_gamme ---------------------------------------------------**/

var qualite_gammeSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	coefficient :{
        type:String,
        required:true
    }
});

var qualite_gamme = mongoose.model('qualite_gamme',qualite_gammeSchema);

/** ---------------------------------------------------- module ----------------------------------------------------------**/

var moduleSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	gamme : {
        type:Schema.Types.ObjectId,
        required:true
    },
	composant : [new Schema({
        id_composant:{
            type:Schema.Types.ObjectId,
            required:true
        },
        nb:{
            type:String,
            required:true
        }
    })]
});

var module = mongoose.model('module',moduleSchema);

/** --------------------------------------------------- plan ------------------------------------------------------------**/

var planSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	nu_etage : {
        type:String,
        required:true
    },
	image : {
        type:String,
        required:true
    },
	nb_module : {
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
	module : [new Schema({
        id_module:{
            type:Schema.Types.ObjectId,
            required:true
        },
        nb:{
            type:String,
            required:true
        }
    })]
});

var plan = mongoose.model('plan',planSchema);

/** ------------------------------------------------ modele_gamme --------------------------------------------------------**/

var modele_gammeSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	nb_etage : {
        type:String,
        required:true
    },
	forme : {
        type:String,
        required:true
    },
	gamme : {
        type:Schema.Types.ObjectId,
        required:true
    },
	plan : {
        type:[Schema.Types.ObjectId],
        required:true
    }
});

var modele_gamme = mongoose.model('modele_gamme',modele_gammeSchema);

/** --------------------------------------------------- devis -----------------------------------------------------------**/

var devisSchema = new Schema({
    nom : {
        type:String,
        required:true
    },
	date_devis : {
        type:String,
        required:true
    },
	client : {
        type:Schema.Types.ObjectId,
        required:true
    },
	adresse : {
        type:Schema.Types.ObjectId,
        required:true
    },
	utilisateur: {
        type:Schema.Types.ObjectId,
        required:true
    },
	plan : {
        type:[Schema.Types.ObjectId],
        required:true
    }
});

var devis = mongoose.model('devis',devisSchema);
