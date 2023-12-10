const express = require('express');
const itemRouter = require(`./item`);

const router = express.Router();

router.use('/item', itemRouter);

module.exports = router;
