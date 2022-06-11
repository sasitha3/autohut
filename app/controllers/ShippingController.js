const Shipping = require('../models/Shipping');

exports.insert = (shipping, fn) => {
	shipping.save().then(async (result)=>{
		fn(result);
	})
	.catch(err => fn(err));
};

exports.fetch = (req, res, next) => {
	Shipping.findAll().then(shipping => {
		res.send(shipping);
	})
	.catch(err => res.send(err));
};

exports.findById = (req, res, next) => {
	Shipping.findByPk(req.params.id).then(shipping => {
		if(shipping != null)
			res.send(shipping);
		else
			res.send(null);
	})
	.catch(err => res.send(err));
};