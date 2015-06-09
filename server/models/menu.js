/**
* Menu model. It's used to connect menu collection.
* Including all CURD operation for menu collection.
*/
/**
* Including mongodb configure file.
*/
var mongoose = require( './database.js' ),
    Schema = mongoose.Schema;
/**
* Create a Schema for menu.
* title is menu name.
* link is Api url.
* published is show state.
* parentId is menu's father menu's id. top menu's parentId is 0 or define a default string by yourself.
* type is menu type. for example: topMenu, hiddenMenu and so on.
* sort is menu sort.
*/
var menuSachema = new Schema({
    title : { type : String, unique : true },
    link : String,
    type : { type : String, index : true },
    published : { type : Boolean, index : true },
    parentId : { type : String, index : true },
    sort : { type : Number, index, true }
});
/**
* According to the schema to create a model.
*/
var Menu = mongoose.model( 'menu', menuSachema );
/**
* Set true data to user model.
*/
function MenuModel( menu ) {
    this.title = menu.title,
    this.link = menu.link,
    this.type = menu.type,
    this.published = menu.published,
    this.parentId = menu.parentId,
    this.sort = menu.sort
}
/**
* Save Menu model to mongodb.
*/
MenuModel.prototype.save = function ( callback ) {
    var addMenu = new Menu( {
        title = this.title,
        link = this.link,
        type = this.type,
        published = this.published,
        parentId = this.parentId,
        sort = this.sort
    } );
    addMenu.save( function( err, doc ){
        if ( err ) return callback( err );
        callback( err, user );
    } );
};

module.exports = MenuModel;