const router = require('express').Router();
const { addUser, login } = require('../models/userModel');


// Create
router.post('/add', addUser);
router.post('/login', login);


module.exports = router;