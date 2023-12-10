const express = require('express');
const v1Router = require(`${__dirname}/v1/v1`);

const router = express.Router();

router.use('/v1', v1Router);

module.exports = router;