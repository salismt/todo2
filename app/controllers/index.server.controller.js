exports.render = function (req, res, next) {
	res.render('index', {
		title: "MEAN TODO",
		user: JSON.stringify(req.user)
	});
};