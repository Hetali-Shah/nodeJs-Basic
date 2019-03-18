const express = require('express');
const router = express.Router();
const wineAction = require('./wineActions');

router.get('/', wineAction.findAll);
router.get('/:id', wineAction.findById);
router.delete('/:id', wineAction.delete);

module.exports = router
