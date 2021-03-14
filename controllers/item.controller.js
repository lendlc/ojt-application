const Item = require('../models/Item');

// @desc        GET ALL ITEMS
// @router      GET /api/items/
// @access      Public
exports.getItems = async (req, res) => {
	//fetch data from database and assign it to the variable items
	const items = await Item.findAll({});

	//send appropriate status code with data
	res.status(200).json({ success: true, items });
};

// @desc        CREATE SINGLE ITEM
// @router      POST /api/items/:id
// @access      Public
exports.createItem = async (req, res) => {
	//using destructuring we can get each fields from the request body.
	const { name, qty, amount } = req.body;

	//Validate if fields sent form request does exist and is valid.
	//this could be done using middleware but for now, this will do.

	//checks if field is a string and is a type of string
	if (!name || typeof name != 'string') {
		return res.status(400).json({ success: false, msg: 'name is required' });
	}

	//checks if field exists and is not 0 and a type of integer
	if (!qty || qty <= 0 || typeof qty != 'number') {
		return res.status(400).json({ success: false, msg: 'qty is required' });
	}

	//checks if field exists and is not 0 and a type of integer
	if (!amount || amount <= 0 || typeof amount != 'number') {
		return res.status(400).json({ success: false, msg: 'amount is required' });
	}

	//If data sent from request exists and is valid,
	//now we can check if the name of the item already exist in the database.
	const item = await Item.findOne({ where: { name } });

	//if the variable item is populated, the item already exists
	if (item) {
		return res.status(400).json({ success: false, msg: 'item already exists' });
	}

	//proceed to create item
	await Item.create({ name, qty, amount });

	//send appropriate response status code
	res.status(201).json({ success: true });
};

// @desc        GET SINGLE ITEM BY ID
// @router      GET /api/items/:id
// @access      Public
exports.getItem = async (req, res) => {
	//find an item from the database using the id from request params
	const item = await Item.findOne({ where: { id: req.params.id } });

	//if the variable item is not populated, the item does not currently exist in the database.
	if (!item) {
		return res.status(404).json({ success: false, msg: 'item not found' });
	}

	//send appropriate response with the found data
	res.status(200).json({ success: true, item });
};

// @desc        UPDATE SINGLE ITEM BY ID
// @router      PUT /api/items/:id
// @access      Public
exports.updateItem = async (req, res) => {
	//find an item from the database using the id from request params
	const item = await Item.findOne({ where: { id: req.params.id } });

	//if the variable item is not populated, the item does not currently exist in the database.
	if (!item) {
		return res.status(404).json({ success: false, msg: 'item not found' });
	}

	const { name, qty, amount } = req.body;

	//Validate if fields sent form request does exist and is valid.
	//this could be done using middleware but for now, this will do.
	//checks if field is a string
	if (typeof name != 'string') {
		return res.status(400).json({ success: false, msg: 'invalid value' });
	}

	//checks if field is not 0 and a type of integer
	if (qty <= 0 || typeof qty != 'number') {
		return res.status(400).json({ success: false, msg: 'invalid value' });
	}

	//checks if is not 0 and a type of integer
	if (amount <= 0 || typeof amount != 'number') {
		return res.status(400).json({ success: false, msg: 'invalid value' });
	}

	//if name exists in request body, check if it already exist in db.
	if (name) {
		//find an item from the database using the name from request
		const item = await Item.findOne({ where: { name } });

		//if the variable item is not populated, the item does not currently exist in the database.
		if (item) {
			return res.status(400).json({ success: false, msg: 'item already exists' });
		}
	}

	//proceed to delete the item from the database
	await item.update(req.body);

	//send appropriate response with the found data
	res.status(200).json({ success: true });
};

// @desc        DELETE SINGLE ITEM BY ID
// @router      DELETE /api/items/:id
// @access      Public
exports.deleteItem = async (req, res) => {
	//find an item from the database using the id from request params
	const item = await Item.findOne({ where: { id: req.params.id } });

	//if the variable item is not populated, the item does not currently exist in the database.
	if (!item) {
		return res.status(404).json({ success: false, msg: 'item not found' });
	}

	//proceed to delete the item from the database
	await item.destroy();

	//send appropriate response with the found data
	res.status(200).json({ success: true });
};
