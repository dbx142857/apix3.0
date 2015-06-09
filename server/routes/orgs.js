var express = require('express');
var common = require('./common.js');
var OrgModel = require('../models/organizations.js');
var UserModel = require('../models/users.js');
var router = express.Router();
/**
* GET users information according to user ID. 
*
* @oublic
* @Common.send return a json.
*/
router.get('/:id', function(req, res) {
    var id = req.params.id;
    OrgModel.findById( id, function ( err, doc ){
        if (err) return common.error( res, err );
        if ( doc ) {
            UserModel.find( {'organizations.id' : id}, { lastVisited : -1 }, 0, function ( err, users ) {
                if ( users ) {
                    for ( var i = 0; i < users.length; i++ ) {
                        doc.members[i] = {
                            "lastVisited" : users[i].lastVisited,
                            "createdBy" : users[i].createdBy,
                            "organizations" : users[i].organizations,
                            "role" : 'visitor',
                            "telephone" : users[i].telephone,
                            "email" : users[i].email,
                            "username" : users[i].username,
                            "lastName" : users[i].lastName,
                            "firstName" : users[i].firstName,
                            "id" : users[i]._id
                        };
                        for ( var j = 0; j < users[i].organizations.length; j++ ) {
                            if ( users[i].organizations[j].id = id ) {
                                doc.members[i].role = users[i].organizations[j].role;
                            }
                        }
                    }
                }
                return common.success( res, doc );
            });
        } else {
            return common.success( res, doc );
        }
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
    OrgModel.find( req.query, { updated : -1 } ,0 , function( err, doc ){
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
    var newOrg = new OrgModel({
        name : req.body.name,
        description : req.body.description,
        created : nowDate,
        updated : nowDate,
        createdBy : req.body.createdBy,
        contact : req.body.contact,
        type : req.body.type,
        threshold : req.body.threshold,
        contactDetails : req.body.contactDetails,
        members : req.body.members,
        hasDownstreamSubscriptions : req.body.hasDownstreamSubscriptions,
        subscriptions : req.body.subscriptions
    });
    OrgModel.save( newOrg, function( err, doc ) {
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
    OrgModel.modifyById( id, req.body, {}, function( err, doc ) {
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
    OrgModel.deleteOneById( id, function (err, doc) {
        if ( err ) return common.error( res, err );
        return common.success( res, doc.result );
    });
});

module.exports = router;

