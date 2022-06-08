const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const CarTruckSP = sequelize.define('carTruckSP', {
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
	brand: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	details: {
		type: DataTypes.STRING(1234),
		allowNull: true
	}
  },
	{
		indexes: [
			],
	});

module.exports = CarTruckSP;