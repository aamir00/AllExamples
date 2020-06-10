const moment = require('moment');

const logger = function(req, res, next) {
	console.log(
		`request URL ${req.protocol}://${req.hostname}${req.url} -- ${moment()} -- responded with ${res.statusCode} -- ${res.body}`
	);
	next();
};

module.exports = logger;
