const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Customer = require('../models/Customer');
const Shipping = require('../models/Shipping');

const Order = sequelize.define('order', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		subCategory: {
			type: DataTypes.STRING,
			allowNull: false
		},
		orderItem: {
			type: DataTypes.STRING,
			allowNull: false
		},
		orderQty: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		details: {
			type: DataTypes.STRING(1234),
			allowNull: true
		},
		orderId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 100
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Customer,
				key: 'id'
			  }
		},
		shippingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Shipping,
				key: 'id'
			  }
		}
  	},
	{
		indexes: [
			],
	});

module.exports = Order;