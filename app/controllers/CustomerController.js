const Customer = require('../models/Customer');

exports.insert = (req, res, next) => {
	const customer = new Customer({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		companyName: req.body.companyName,
		email: req.body.email,
		addressLine1: req.body.addressLine1,
		addressLine2: req.body.addressLine2,
		cityTown: req.body.cityTown,
		stateProvince: req.body.stateProvince,
		postalCode: req.body.postalCode,
		country: req.body.country,
		phone: req.body.phone

	});
	customer.save().then((result)=>{
		res.send(result);
	})
	.catch(err => res.send(err));
};

exports.fetch = (req, res, next) => {
	Customer.findAll().then(customer => {
		res.send(customer);
	})
	.catch(err => res.send(err));
};

exports.findById = (req, res, next) => {
	Customer.findByPk(req.params.id).then(customer => {
		if(customer != null)
			res.send(customer);
		else
			res.send(null);
	})
	.catch(err => res.send(err));
};