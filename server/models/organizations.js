/**
* Organization model. It's used to connect organization collection.
* Including all CURD operation for organization collection.
*/
/**
* Including mongodb configure file.
*/
var mongoose = require( './database.js' ),
    Schema = mongoose.Schema;
/**
* Create a Schema for organizations.
* name field is organization name. It is a unique value.
* masterId is this organization's super user. Default is this organzition's firstly manager. If have nothing firstly manager, the masterId is create this organiztion's user.
* description is organization's description.
* type is organization's type.
* address is organization's address.
* telephone is organzation's contact phone number.
* createTime is create this organization's time. Suggested format is timestamp or 'MM/DD/YYYY'
*/
var orgSchema = new Schema( {
    name : { type : String, index : { unique : true } },
    description : String,
    created : String,
    updated : String,
    createdBy : {
        id : String,
        firstName : String,
        lastName : String,
        username : String,
        email : String,
        telephone : String
    },
    contact:{
        id : String,
        firstName : String,
        lastName: String,
        username: String,
        email : String,
        telephone : String
    },
    hasDownstreamSubscriptions : { type : Boolean, default : false },
    type: { type:String, index : true },
    threshold : {
        name : String,
        value : String
    },
    contactDetails : {
        address:{
            country : String,
            state : String,
            city : String,
            zip : String,
            address1 : String,
            address2 : String,
        },
        telephone : String
    },
    members:[String],
    subscriptions : [String]
}, { versionKey : false } );
/**
* According to the schema to create a model.
*/
var Org = mongoose.model( 'organizations', orgSchema );
/**
* Set true data to user model.
*/
function OrgModel( org ) {
    this.name = org.name,
    this.description = org.description,
    this.created = org.created,
    this.updated = org.updated,
    this.createdBy = org.createdBy,
    this.contact = org.contact,
    this.hasDownstreamSubscriptions = org.hasDownstreamSubscriptions,
    this.type = org.type,
    this.threshold = org.threshold,
    this.contactDetails = org.contactDetails,
    this.members = org.members,
    this.subscriptions = org.subscriptions
}
/**
* Save organization model to mongodb.
*/
OrgModel.save = function ( newOrg, callback ) {
    var addOrg = new Org( newOrg );
    addOrg.save( function( err, doc ){
        if ( err ) return callback( err );
        callback( err, doc );
    } );
};

OrgModel.find = function ( query, sort, limit, callback ){
    if ( limit == 0 ) {
        Org.find( query ).sort( sort ).exec( function ( err, doc ) {
            if ( err ) return callback( err );
            callback( err, doc );
        } );
    } else {
        Org.find( query ).sort( sort ).limit( limit ).exec( function ( err, doc ) {
            if ( err ) return callback( err );
            callback( err, doc );
        } );
    }
};

/**
* Find data through id.
*
* @protected
*/
OrgModel.findById = function( id, callback ){
    Org.findById(id, function ( err, doc ) {
        if ( err ) return callback( err );
        callback( err, doc );
    });
};
/**
* Update data.
*
* @protected
* @query is a Json, it is a query condition. for example { username : 'burtyu' }
* @update is a Json, it is new value. { username : 'burtyu' } or { $set: { username : 'burtyu' } }
* @options is a Json, it is a setup. { safe : false, multi : true }
* @return callback is a function.
*/
OrgModel.modify = function( query, update, options, callback ) {
    OrgModel.update( query, update, options, function( err, doc ){
        if ( err ) return callback( err );
        callback( err, doc );
    } );
};
/**
* Update data.
*
* @protected
* @query is a Json, it is a query condition. for example { username : 'burtyu' }
* @update is a Json, it is new value. { username : 'burtyu' } or { $set: { username : 'burtyu' } }
* @options is a Json, it is a setup. { safe : false, multi : true }
* @return callback is a function.
*/
OrgModel.modifyById = function( id, update, options, callback ) {
    Org.findByIdAndUpdate( id, update, options, function( err, doc ){
        if ( err ) return callback( err );
        if ( doc ) return callback( err, doc );
        callback( err, { result : "The data hadn't been founded." } );
    } );
};
/**
* Delete all data.
*
* @protected
* query is a Json, it is a query condition. for example { username : 'burtyu' }
*/
OrgModel.delete = function( query, callback ) {
    Org.remove( query, function(err) {
        if ( err ) return callback( err );
        callback( err, {result: 'Delete Success.'})
    });
};
/**
* Delete one data from mongodb.
*
* @protected
* query is a Json, it is a query condition. for example { username : 'burtyu' }
*/
OrgModel.deleteOne = function( query, callback ) {
    Org.findOneAndRemove( query, function( err, user ){
        if ( err ) return callback( err );
        callback( err, user );
    } );
};
/**
* Add one new Member
*
* @protected
* query is a Json, it is a query condition. for example { username : 'burtyu' }
*/

OrgModel.addMember = function( id, member, callback) {
    Org.findById(id, function ( err, doc ) {
        if ( err ) return callbac( err );
        if ( doc ) {

        }
        callback( err, doc );
    });
}
/**
* Delete one data according to id.
*
* @protected
*/
OrgModel.deleteOneById = function ( id, callback ) {
    Org.findByIdAndRemove(id, function( err ){
        if( err ) return callback( err );
        callback( err, {result : 'The data has been removed.'} );
    });
};

module.exports = OrgModel;