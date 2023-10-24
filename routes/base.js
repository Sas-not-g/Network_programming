const router = require('express').Router();
const {
  getFiveQuotes,
} = require('../controllers/base');

router.get('/', getFiveQuotes);

module.exports = router;
