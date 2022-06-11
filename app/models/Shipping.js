const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Customer = require('../models/Customer');

const Shipping = sequelize.define('shipping', {
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
		port: {
			type: DataTypes.STRING,
			allowNull:false
		},
		addedUser: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Customer,
				key: 'id'
			  }
		}
  	},
	{
		indexes: [
			],
	});

	Shipping.associate = models => {
        Shipping.hasMany(models.Customer, { as: 'ta', foreginKey: 'id' });
    }
module.exports = Shipping;