var object1 = {name:'barbie doll',
				id: 0,
				cost: 20.00,
				rating: 'None',
				info: 'This is a lovely barbie doll',
				comments: ["I loved it"],
				keywords: ['toy', 'child']
			}

var object2 = {name:'nerf ball',
				id: 1,
				cost: 7.00,
				rating: 'None',
				info: 'One ball made of nerf',
				comments: [],
				keywords: ['sport', 'toy'] 
				//-make keywords hyperlinks to new searches
			}
			
var object3 = {name:'harry potter book',
				id: 2,
				cost: 12.00,
				info: 'A captivating read',
				rating: 'None',
				comments: [],
				keywords: ['book', 'child']
			}
exports.generate = function () {
	return [object1, object2, object3]
}

exports.unit = function(req, res) {
	var foo = exports.generate()[req.params.id]
	res.render('product', {item: foo})
}
//-generate this with amazon.com api