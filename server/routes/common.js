var express = require('express');
var crypto = require('crypto');
var common = {
    /**
    * Send data to user.
    *
    * @res is a object from routes.
    * @msg is you need to return the user's information.
    * return a json data.
    */
    send : function ( res, msg ) {
        res.set({'Content-Type':'text/json','Encodeing':'utf8'});
        return res.send( msg );
    },
    /**
    * Send success information to user.
    *
    * @res is a object from routes.
    * @msg is data from model.
    * return a json data. The format is { type : 'success', message : {} }.
    */
    success : function( res, msg ) {
        this.send( res, { result : 'success', message : msg } );
    },
    /**
    * Send error information to user.
    *
    * @res is a object from routes.
    * @msg is error intormation from model.
    * Memo: there have two kinds of format for error information.
    *       First: 'CastError' is a node error.For example, Get query have format error.
    *       Second: 'MongoError' is error from mongodb. For example, user email is a unique. if you create new user's email have exist, Mongodb will return a 'MongoError'.  
    *       If have anthor error format. I will add it to error function. 
    * return a json data. The format is { type : 'error', code : XXXX, message : error information }.
    */
    error : function( res, err ) {
        res.status(err.status || 500);
        if ( err.name === 'CastError' )
            this.send( res, { result : 'error', code : 21001, message : err.message } );
        else if ( err.name === 'MongoError' )
            this.send( res, { result : 'error', code : err.code, message : err.err } );
        else 
            this.send( res, { result : 'error', err : err } );
    },
    /**
    * This function is userd to Encrypt data.
    * 
    * @password is you would like to encrypt data.
    * @type is encryption algorithm. Recommand 'sha1' and 'md5'. The server will use 'sha1'.
    * return encryption string. The type is a string.
    */
    encrypt : function (password, type) {
        var encrypt = crypto.createHash(type);
        return encrypt.update( password ).digest('base64');
    },
};

module.exports = common;