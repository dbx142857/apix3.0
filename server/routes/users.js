var express = require('express');
var UserModel = require('../models/users.js');
var OrgModel = require('../models/organizations.js');
var common = require('./common.js');
var router = express.Router();
/**
* GET users information according to user ID. 
*
* @oublic
* @Common.send return a json.
*/
router.get('/:id', function(req, res) {
    var id = req.params.id;
    UserModel.findById( id, function ( err, doc ){
        if (err) return common.error( res, err );
        return common.success( res, doc );
    });
});
/**
* GET users listing. 
*
* @oublic
* @If use http://localhost/u?username=demo&password=123654, 'req.query' can automatically get this fields.
* @Common.send return a json.
*/

router.get('/', function(req, res) {
    console.log(req.sessionID);
    UserModel.find( req.query, { lastVisited : -1 }, 0 , function( err, doc ){
        if (err) return common.error( res, err );
        return common.success( res, doc );
    });
});

/**
* Add a new user.
*
* @oublic
* @Common.send return a json.
*/

router.post('/', function (req, res) {
    var nowDate = Date.parse(new Date());
    var user = new UserModel({
        created : nowDate,
        updated : nowDate,
        createdBy : req.body.createdBy,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        username : req.body.username,
        password : common.encrypt(req.body.password, 'sha1'),
        email : req.body.email,
        telephone : req.body.telephone,
        lastVisited : nowDate,
        status : req.body.status,
        organizations : req.body.organizations
    });
    UserModel.save( user, function( err, doc ) {
        if ( err ) return common.error( res, err );
        return common.success( res, doc );
    });
});
/**
* Update a new user.
*
* @oublic
* @Common.send return a json.
*/
router.post('/:id', function (req, res) {
    var id = req.params.id;
    UserModel.modifyById( id, req.body, {}, function( err, doc ) {
        if ( err ) return common.error( res, err );
        return common.success( res, doc );
    });
});

/**
* Delete a user through user ID.
* @public
* @Common.send return a json.
*/
router.delete('/:id', function ( req, res ) {
    var id = req.params.id;
    UserModel.deleteOneById( id, function (err, doc) {
        if ( err ) return common.error( res, err );
        return common.success( res, doc.result );
    });
});

module.exports = router;