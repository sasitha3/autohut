const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');
const CustomerController = require('../app/controllers/CustomerController');
const ShippingController = require('../app/controllers/ShippingController');
const OrderController = require('../app/controllers/OrderController');

router.get('/', HomeController.homePage);

router.get('/order', OrderController.fetch);
router.post('/order', OrderController.insert);
router.put('/orderState', AuthController.logout);

router.get('/customer', CustomerController.fetch);
router.get('/customer/:id', CustomerController.findById);
router.post('/customer', CustomerController.insert);

router.get('/shipping', ShippingController.fetch);
router.post('/shipping', ShippingController.insert);

module.exports = router;