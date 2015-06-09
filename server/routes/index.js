var express = require('express');
var common = require('./common.js');
var router = express.Router();
/**
* GET home page. 
*/
router.get('/', function(req, res) {
    common.send( res, {'success' : 'This is a home page' + date} );
});

module.exports = router;
