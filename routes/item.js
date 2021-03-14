//get router from express
const router = require('express').Router();

//get controller functions from controller file
const {
	getItems,
	createItem,
	getItem,
	updateItem,
	deleteItem,
} = require('../controllers/item.controller');

//define endpoints
router.route('/items').get(getItems).post(createItem);

router.route('/items/:id').get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;
