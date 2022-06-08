const Order = require('../models/Order');

exports.insert = (req, res, next) => {
	const order = new Order({
		category: req.body.category,
		subCategory: req.body.subCategory,
		orderItem: req.body.orderItem,
		orderQty: req.body.orderQty,
		details: req.body.details,
		userId: req.body.userId,
		shippingId: req.body.shippingId

	});
	order.save().then((result)=>{
		res.send(result);
	})
	.catch(err => res.send(err));
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