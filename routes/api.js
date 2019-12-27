const router = require('express').Router();

router.get('/test', function(req, res, next) {
	res.sendStatus(418);
});

module.exports = router;