//var path = require('path'),
//    express = require('express'),
//    expressHandleBars = require('express-handlebars'),
//    keystone = require('keystone'),
//    port = process.env.PORT || 8000,
//    app = express();
//
//keystone.set('app', app);
//
//// set public folder as static so styles and scripts are available externally
//app.use(express.static('public'));
//
//app.engine('.hbs', expressHandleBars({
//    defaultLayout: 'main',
//    extname: '.hbs',
//    layoutDir: path.join(__dirname, 'templates/views/layouts'),
//    helpers: {
//     // set up sections
//      section: function(name, options){
//        if(!this._sections){
//          this._sections = {};
//        }
//        this._sections[name] = options.fn(this);
//        return null;
//      }
//    }
//}));
//  
//app.set('view engine', '.hbs');
//app.set('views', path.join(__dirname, 'views'));
//
//app.get('/', function(req, res){
//    //render homepage
//    res.render('home', {
//        name: 'James'
//    }); 
//});
//
//app.get('/gallery', function(req, res){
//    res.render('gallery');
//});
//
//app.listen(port, function(err){
//    console.log('server listening on server ' + port); 
//});
//
//require('./models');
// 
//keystone.set('routes', require('./routes'));
//
//keystone.start();

var path = require('path');
var expressHandleBars = require('express-handlebars');
var keystone = require('keystone');

keystone.init({
    'name': 'LeonidaCrafts',
    'scss': 'public',
    'static': ['public'],
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    
    'custom engine': expressHandleBars({
                        defaultLayout: 'main',
                        extname: '.hbs',
                        layoutDir: path.join(__dirname, 'templates/views/layouts'),
                        helpers: {
                         // set up sections
                          section: function(name, options){
                            if(!this._sections){
                              this._sections = {};
                            }
                            this._sections[name] = options.fn(this);
                            return null;
                          }
                        }
                    }),
    
    'view engine': 'handlebars',
    
    'auto update': true,
    'mongo': 'mongodb://localhost/leonida-crafts',
  
    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '93eb055c82b64ad98177a5def4929593'
});

require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();