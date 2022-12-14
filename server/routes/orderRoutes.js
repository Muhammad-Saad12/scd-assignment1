const express = require('express');
const router = express.Router();
const{getOrders,setOrders}=require('../controllers/orderController');
const{getCustomers,setCustomers}=require('../controllers/customerController');

router.get('/orders',getOrders);

router.post('/orders',setOrders);

router.get('/customers',getCustomers);
router.post('/customers',setCustomers);

module.exports=router;