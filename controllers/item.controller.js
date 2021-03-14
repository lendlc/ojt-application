const Item = require('../models/Item');

// @desc        GET ALL ITEMS
// @router      GET /api/items/
// @access      Public
exports.getItems = async (req, res) => {
	const items = await Item.findAll({});

	res.status(200).json({ success: true, items });
};

// @desc        CREATE SINGLE ITEM
// @router      POST /api/items/
// @access      Public

// @desc        GET SINGLE ITEM BY ID
// @router      GET /api/items/:id
// @access      Public

// @desc        UPDATE SINGLE ITEM BY ID
// @router      PUT /api/items/:id
// @access      Public

// @desc        DELETE SINGLE ITEM BY ID
// @router      DELETE /api/items/:id
// @access      Public
