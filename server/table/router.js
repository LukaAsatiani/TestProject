const express = require('express');
const router = express.Router();

const table = 'table';

const {
  get
} = require("./controller");

router.post('/', get);

module.exports = router;