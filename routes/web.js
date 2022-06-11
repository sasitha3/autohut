const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');
const CustomerController = require('../app/controllers/CustomerController');
const ShippingController = require('../app/controllers/ShippingController');
const OrderController = require('../app/controllers/OrderController');
const CommonController = require('../app/controllers/CommonController');
const ProcessController = require('../app/controllers/ProcessController');

router.get('/', HomeController.homePage);

router.get('/order', OrderController.fetch);
router.put('/orderState', OrderController.updateState);

router.get('/customer', CustomerController.fetch);
router.get('/customer/:id', CustomerController.findById);

router.get('/shipping', ShippingController.fetch);

router.get('/all/:type', CommonController.getCategories);
router.get('/all/:type/:category', CommonController.getSubCategories);
router.get('/all/:type/:category/:item', CommonController.getItems);

router.post('/placeOrder', ProcessController.placeOrder);
router.get('/getOrderDetails/:id', ProcessController.fetchOrder);

module.exports = router;