const Shipping = require('../models/Shipping');

exports.insert = (req, res, next) => {
	const shipping = new Shipping({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		companyName: req.body.companyName,
		addressLine1: req.body.addressLine1,
		addressLine2: req.body.addressLine2,
		cityTown: req.body.cityTown,
		stateProvince: req.body.stateProvince,
		postalCode: req.body.postalCode,
		country: req.body.country,
		port: req.body.port,
		addedUser: req.body.userId

	});
	shipping.save().then((result)=>{
		res.send(result);
	})
	.catch(err => res.send(err));
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