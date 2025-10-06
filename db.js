const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.URI
mongoose.connect(uri, { useNewUrlParser: true});

module.exports = mongoose