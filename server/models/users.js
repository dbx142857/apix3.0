/**
* User model. It's used to connect users collection.
*
* @Including all CURD operation for users collection.
*/
/**
* Including mongodb configure file.
*/
var mongoose = require( './database.js' ),
    Schema = mongoose.Schema;
/**
* Create a Schema for user.
*
* @protected
* @email field is user's email, it is a unique field.
* @password field is user's password.
* @username field is user's name.
* @sex field is user's sex - male or female
* @birthday field is user's birthday. Suggested format is timestamp or 'MM/DD/YYYY'
* @address field is user's address.
* @telephone field is user's telephone.
* @country field is user's country.
* @organizationsId field is user's organization id.
* @createTime field is create this user's time.
* @versionKey is mongoose auto-create version infomation, If you need it please use 'true' to replace 'false'.
*/
var userSchema = new Schema( {
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
    firstName : String,
    lastName : String,
    username : String, 
    password : { type : String, index : true },
    email : { type : String, index : { unique : true } },
    telephone : String,
    lastVisited : String,
    status : { type : String, index : true },
    organizations:['{ id : String, name : String, type : String, role : String }']
}, { versionKey : false } );
/**
* According to the schema to create a model.
*/
var User = mongoose.model( 'users', userSchema );
/**
* Set true data to user model.
*
* @protected
*/
function UserModel( user ) {
    this.created = user.created,
    this.updated = user.updated,
    this.createdBy = user.createdBy,
    this.firstName = user.firstName,
    this.lastName = user.lastName,
    this.username = user.username,
    this.password = user.password,
    this.email = user.email,
    this.telephone = user.telephone,
    this.lastVisited = user.lastVisited,
    this.status = user.status,
    this.organizations = user.organizations
};
/**
* Save user model to mongodb.
*
* @protected

*/
UserModel.save = function ( user, callback ) {
    var addUser = new User( user );
    addUser.save( function( err, doc ){
        if ( err ) return callback( err );
        callback( err, doc );
    } );
};

/**
* Find data from mongodb.
*
* @protected
* @query is a Json, it is a query condition. for example { username : 'burtyu' }
* @sort is a Json, it is a sort condition. for example { createTime : 1 }, the value is only 1 or -1.
* @limit is a number, it is a query number. If need to get all data, you can set 0.
* @callback is a callback function.
*/
UserModel.find = function( query, sort, limit, callback ){
    if ( limit == 0 ) {
        User.find( query ).sort( sort ).exec( function ( err, doc ) {
            if ( err ) return callback( err );
            callback( err, doc );
        } );
    } else {
        User.find( query ).sort( sort ).limit( limit ).exec( function ( err, doc ) {
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
UserModel.findById = function( id, callback ){
    User.findById(id, function ( err, doc ) {
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
UserModel.modify = function( query, update, options, callback ) {
    UserModel.update( query, update, options, function( err, doc ){
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
UserModel.modifyById = function( id, update, options, callback ) {
    User.findByIdAndUpdate( id, update, options, function( err, doc ){
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
UserModel.delete = function( query, callback ) {
    User.remove( query, function(err) {
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
UserModel.deleteOne = function( query, callback ) {
    User.findOneAndRemove( query, function( err, doc ){
        if ( err ) return callback( err );
        callback( err, doc );
    } );
};
/**
* Delete one data according to id.
*
* @protected
*/
UserModel.deleteOneById = function ( id, callback ) {
    User.findByIdAndRemove(id, function( err ){
        if( err ) return callback( err );
        callback( err, {result : 'The data has been removed.'} );
    });
};
module.exports = UserModel;