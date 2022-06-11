const CustomerController = require('./CustomerController');
const ShippingController = require('./ShippingController');
const OrderController = require('./OrderController');

const Customer = require('../models/Customer');
const Shipping = require('../models/Shipping');
const Order = require('../models/Order');

const sequelize = require('../../config/database');

 exports.placeOrder = (req, res, next) => {
	
	const customer = new Customer({
		firstName: req.body.customer.firstName,
		lastName: req.body.customer.lastName,
		companyName: req.body.customer.companyName,
		email: req.body.customer.email,
		addressLine1: req.body.customer.addressLine1,
		addressLine2: req.body.customer.addressLine2,
		cityTown: req.body.customer.cityTown,
		stateProvince: req.body.customer.stateProvince,
		postalCode: req.body.customer.postalCode,
		country: req.body.customer.country,
		phone: req.body.customer.phone

	});
	CustomerController.insert(customer, function(customerResult){
		
		const shipping = new Shipping({
			firstName: req.body.shipping.firstName,
			lastName: req.body.shipping.lastName,
			companyName: req.body.shipping.companyName,
			addressLine1: req.body.shipping.addressLine1,
			addressLine2: req.body.shipping.addressLine2,
			cityTown: req.body.shipping.cityTown,
			stateProvince: req.body.shipping.stateProvince,
			postalCode: req.body.shipping.postalCode,
			country: req.body.shipping.country,
			port: req.body.shipping.port,
			addedUser: customerResult.id
	
		});
		ShippingController.insert(shipping, function(shippingResult){

			const order = new Order({
				category: req.body.order.category,
				subCategory: req.body.order.subCategory,
				orderItem: req.body.order.orderItem,
				orderQty: req.body.order.orderQty,
				details: req.body.order.details,
				userId: customerResult.id,
				shippingId: shippingResult.id
		
			});
			OrderController.insert(order, function(orderResult){
				res.send({
					customerDetails: customerResult,
					shippingDetails: shippingResult,
					orderDetails: orderResult
				  });
			});
		});
		
	  });
};

exports.fetchOrder = (req, res, next) => {
	Order.findByPk(req.params.id).then(order => {
		if(order != null)
			Shipping.findByPk(order.shippingId).then(shipping => {
				if(shipping != null)
					Customer.findByPk(order.userId).then(customer => {
						if(customer != null)
							res.send({
								'order':order,
								'shipping':shipping,
								'customer':customer
							});
						else
							res.send({
								'order':order,
								'shipping':shipping,
								'customer':null
							});
					})
				else
				res.send({
					'order':order,
					'shipping':null,
					'customer':null
				});
			})
		.catch(err => res.send(err));
		else
		res.send({
			'order':null,
			'shipping':null,
			'customer':null
		});
	})
	.catch(err => res.send(err));
};
