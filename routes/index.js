const router = require('express').Router();

router.get('/', function(req, res, next) {
	res.render('index', { pretty: true });
});

module.exports = router;