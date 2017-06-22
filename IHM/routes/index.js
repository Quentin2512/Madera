var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index.ejs');
});

router.post('/home', function (req, res, next) {
	var data = {
		login:req.body.login,
		password:req.body.password
	};

	res.render('home.ejs',{ data: data });
});

module.exports = router;
