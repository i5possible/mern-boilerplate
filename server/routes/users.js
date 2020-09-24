var express = require('express');
var User = require('../models').User
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	var query = {};
	var options = {
		page: req.body.page,
		limit: req.body.limit
	};

	User.paginate(query, options).then(result => { res.json(result) });
});

const createUser = (req, res, next) => {
	console.log("create user restart")
	try {
		let newUser = new User();
		newUser.id = req.body.id;
		newUser.username = req.body.username;
		newUser.save().then(res => console.log(res))
		res.json(newUser)
	} catch (e) {
		console.log(e)
		res.json({ error: e })
	}
}

router.post('/', createUser)

module.exports = router;
