var products = require('./products')

var amazondatabase = products.generate()

exports.search = function(req, res){
	var mysearch = []
	for (var i = 0; i<amazondatabase.length; i++) {
		for (var j = 0; j<amazondatabase[i].keywords.length;j++) {
			if (req.body.search == amazondatabase[i].keywords[j]) {
				mysearch.push(amazondatabase[i])
			}
		} 
	}
	return mysearch
}
exports.list = function(req, res) {
	var query = req.body.search
	var user = ' '
	if (req.session.username)
		user = req.session.username
	mysearch = exports.search(req, res)
	res.render('query', {title:'hello there', 
		query:query, mysearch: mysearch, user: user})
}