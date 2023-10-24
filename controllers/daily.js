const Quote = require('../models/quote');

module.exports.dailyQuote = (req, res) => {
  Quote.count().then((cnt) => {
    const random = Math.floor(Math.random() * cnt);
    Quote.findOne().skip(random).exec()
      .then((result) => {
        res.status(200).send(result);
      });
  });
};
