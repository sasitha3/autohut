const Customer = require('../models/Customer');

const insert = (customer, fn) => {
	
	customer.save().then(async (result)=>{
		fn(result);
	})
	.catch(err => fn(err));
};

const fetch = (req, res, next) => {
	Customer.findAll().then(customer => {
		res.send(customer);
	})
	.catch(err => res.send(err));
};

const findById = (req, res, next) => {
	Customer.findByPk(req.params.id).then(customer => {
		if(customer != null)
			res.send(customer);
		else
			res.send(null);
	})
	.catch(err => res.send(err));
};

module.exports = {
	insert,
	fetch,
	findById
}