const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  source: {
    type: String,
    default: 'Unknown',
    minlength: 2,
    maxlength: 30,
  },
}, { versionKey: false });

// eslint-disable-next-line new-cap
module.exports = new mongoose.model('quote', quoteSchema);
