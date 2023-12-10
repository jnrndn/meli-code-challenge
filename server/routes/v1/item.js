const express = require('express');
const {getItems,getItemById} = require('./../../controllers/itemController')

const router = express.Router();

router.route('/').get(getItems)
router.route('/:id').get(getItemById)

module.exports = router