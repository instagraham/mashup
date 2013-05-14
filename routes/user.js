var routes = require('../routes')
/*
 * GET users listing.
 */


exports.logout = function(req, res){
	delete req.session.name 
	delete req.session.itemid
	delete req.session.reblogs
	routes.index(req,res)
}