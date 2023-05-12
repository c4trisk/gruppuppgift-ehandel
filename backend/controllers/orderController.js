const router = require('express').Router();
const { addOrder, getOrderById, getOrderByUser, addToExistingOrder, getOrders } = require('../models/orderModel');

// Create
router.post('/', addOrder)
router.post('/add/:id', addToExistingOrder)

// Read
router.get('/', getOrders)
router.get('/:id', getOrderById)
router.get('/user/:id', getOrderByUser)



module.exports = router;
