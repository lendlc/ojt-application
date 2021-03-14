//get router from express
const router = require('express').Router();

//get controller functions from controller file
const { getItems } = require('../controllers/item.controller');

//define endpoints 
router.route('/items').get(getItems);

module.exports = router;