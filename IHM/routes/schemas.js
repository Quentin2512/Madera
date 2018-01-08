var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
	type:{
		type:Schema.Types.ObjectId,
		required:true
	}
});

var utilisateur = mongoose.model('utilisateur', utilisateurSchema);
