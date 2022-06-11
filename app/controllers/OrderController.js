const Order = require('../models/Order');

exports.insert = (order,fn) => {
	
	order.save().then(async (result)=>{
		fn(result);
	})
	.catch(err => fn(err));
};

exports.fetch = (req, res, next) => {
	Order.findAll().then(order => {
		res.send(order);
	})
	.catch(err => res.send(err));
};

exports.findById = (req, res, next) => {
	Order.findByPk(req.params.id).then(order => {
		if(order != null)
			res.send(order);
		else
			res.send(null);
	})
	.catch(err => res.send(err));
};

exports.updateState = (req, res, next) => {
	const orderId = req.body.orderId;
	const state =  req.body.state
	Order.update(
		{ state: state },
		{ where: { id: orderId } }
	  ).then(order => {
		if(order[0] == 1)
			res.send({"res":"Updated successfully !"});
		else
			res.send({"res":"Failed to update !"});
	})
	.catch(err => res.send(err));
};