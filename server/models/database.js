var mongoose = require('mongoose');
var config = require('../config/config.js');
module.exports = mongoose.connect('mongodb://'+config.host+'/'+config.db);