/**
* Import needly modules
* express-session is store user session to mongodb.
* MongoStore is connect mongodb.
* config is configure file.
* Others modules is express‘ modules.
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var routes = require('./routes/index');
var users = require('./routes/users');
var orgs = require('./routes/orgs');
var config = require('./config/config.js');
var app = express();

/**
* view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
*/

/**
* load modules.
*/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('apix_'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:config.cookieSecret,
    key:config.db,
    cookie:{maxAge:1000*60*60*24*30},
    store:new MongoStore({db:config.db})
}));


/**
* Add route rules.
*/
app.use('/', routes);
app.use('/u/', users);
app.use('/org/', orgs);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-Type");
    next();
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.set({'Content-Type':'text/json','Encodeing':'utf8'});
        res.send({'error' : err.message}); 
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.set({'Content-Type':'text/json','Encodeing':'utf8'});
    res.send({'error' : err.message}); 
});


module.exports = app;
