const Quote = require('../models/quote');

module.exports.getFiveQuotes = (req, res) => {
  Quote.aggregate([{
    $sample: {
      size: 5,
    },
  }, {
    $group: {
      _id: '$_id',
      result: { $push: '$$ROOT' },
    },
  }, {
    $replaceRoot: {
      newRoot: { $first: '$result' },
    },
  }]).then((result) => {
    res.status(200).send(result);
  });
};
