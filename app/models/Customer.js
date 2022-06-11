const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Shipping = require('../models/Shipping');

const Customer = sequelize.define('customers', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		companyName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		addressLine1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		addressLine2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cityTown: {
			type: DataTypes.STRING,
			allowNull:false
		},
		stateProvince: {
			type: DataTypes.STRING,
			allowNull:false
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull:false
		},
		country: {
			type: DataTypes.STRING,
			allowNull:false
		},
		phone: {
			type: DataTypes.STRING,
			allowNull:false
		}
  	},
	{
		indexes: [
			],
	});

	Customer.associate = models => {
        Customer.hasMany(models.Shipping, { as: 'tb', foreginKey: 'addedUser' });
    }
module.exports = Customer;