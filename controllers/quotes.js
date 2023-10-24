const Quote = require('../models/quote');

module.exports.createQuote = (req, res) => {
  const { text, source } = req.body;
  Quote.create({ text, source })
    .then((quote) => res.status(201).send({ quote }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Введены некорректные данные' });
      }
      return res.status(500).send({ message: err.name });
    });
};
