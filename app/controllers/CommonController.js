const Boating = require('../models/Boating');
const Vehicle = require('../models/Vehicle');
const Tools = require('../models/Tools');
const MotorCycleSP = require('../models/MotorCycleSP');
const CarTruckSP = require('../models/CarTruckSP');
const sequelize = require('../../config/database');

exports.getCategories = (req, res, next) => {
	const type = req.params.type;
	var arr = [];
	if(type == 'boating'){
		
		Boating.aggregate('category', 'DISTINCT', { plain: false }).then(boating => {
			boating.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'vehicle'){
		Vehicle.aggregate('category', 'DISTINCT', { plain: false }).then(vehicle => {
			vehicle.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'tools'){
		Tools.aggregate('category', 'DISTINCT', { plain: false }).then(tools => {
			tools.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'motorCycleSP'){
		MotorCycleSP.aggregate('category', 'DISTINCT', { plain: false }).then(motorCycleSP => {
			motorCycleSP.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'carTruckSP'){
		CarTruckSP.aggregate('category', 'DISTINCT', { plain: false }).then(carTruckSP => {
			carTruckSP.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else {
		res.send({res: 'type not found'});
	}
	
};

exports.getSubCategories = (req, res, next) => {
	const type = req.params.type;
	const category = req.params.category;
	var arr = [];
	if(type == 'boating'){
		
		Boating.aggregate('brand', 'DISTINCT', { plain: false, where: {
			category: category
		  } }).then(boating => {
				boating.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));		
	} else if (type == 'vehicle'){

		Vehicle.aggregate('brand', 'DISTINCT', { plain: false, where: {
			category: category
		  } }).then(vehicle => {
			vehicle.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'tools'){

		Tools.aggregate('brand', 'DISTINCT', { plain: false, where: {
			category: category
		  } }).then(tools => {
			tools.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'motorCycleSP'){

		MotorCycleSP.aggregate('brand', 'DISTINCT', { plain: false, where: {
			category: category
		  } }).then(motorCycleSP => {
			motorCycleSP.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'carTruckSP'){

		CarTruckSP.aggregate('brand', 'DISTINCT', { plain: false, where: {
			category: category
		  } }).then(carTruckSP => {
			carTruckSP.map((data)=> {
				arr.push(data.DISTINCT);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else {
		res.send({res: 'type not found'});
	}
};

exports.getItems = (req, res, next) => {
	const type = req.params.type;
	const category = req.params.category;
	const item = req.params.item;
	var arr = [];
	if(type == 'boating'){
		
		Boating.findAll({
			attributes: ['name'],
			where: {
				category: category,
				brand: item
			  }
		  }).then(boating => {
			boating.map((data)=> {
				arr.push(data.name);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'vehicle'){

		Vehicle.findAll({
			attributes: ['name'],
			where: {
				category: category,
				brand: item
			  }
		  }).then(vehicle => {
			vehicle.map((data)=> {
				arr.push(data.name);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'tools'){

		Tools.findAll({
			attributes: ['name'],
			where: {
				category: category,
				brand: item
			  }
		  }).then(tools => {
			tools.map((data)=> {
				arr.push(data.name);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'motorCycleSP'){

		MotorCycleSP.findAll({
			attributes: ['name'],
			where: {
				category: category,
				brand: item
			  }
		  }).then(motorCycleSP => {
			motorCycleSP.map((data)=> {
				arr.push(data.name);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else if (type == 'carTruckSP'){

		CarTruckSP.findAll({
			attributes: ['name'],
			where: {
				category: category,
				brand: item
			  }
		  }).then(carTruckSP => {
			carTruckSP.map((data)=> {
				arr.push(data.name);
			});
			res.send(arr);
		})
		.catch(err => res.send(err));	
	} else {
		res.send({res: 'type not found'});
	}
};