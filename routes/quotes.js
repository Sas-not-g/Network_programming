const router = require('express').Router();
const {
  createQuote,
} = require('../controllers/quotes');

router.post('/', createQuote);

module.exports = router;
