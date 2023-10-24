const router = require('express').Router();
const {
  dailyQuote,
} = require('../controllers/daily');

router.get('/', dailyQuote);

module.exports = router;
