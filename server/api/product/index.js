const controller=require('./product.controller')
const passport=require('passport')
const auth = require('../../middleware/auth');
const upload = require('../../middleware/profilePic')
const express = require('express');
const router = express.Router();

router.post('/add', controller.create);  //will be used by shopkeeper

module.exports = router;