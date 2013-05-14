var products = require('./products')

var amazondatabase = products.generate()

exports.index = function(req, res){
  if (!req.session.username)
    req.session.username = ' '

  if (req.body.username)
  	req.session.username = req.body.username

  if (req.body.itemid)
	  var reblog = amazondatabase[req.body.itemid]
	  if (!req.session.reblogs)
		req.session.reblogs = [reblog]
	  else
		req.session.reblogs[req.session.reblogs.length + 1] = amazondatabase[req.body.itemid]
	
  console.log(req.session.reblogs, 'reblogs')
  
  res.render('index', { title: 'Amazumbler', 
  	user:req.session.username, 
    myposts:req.session.reblogs});
};
