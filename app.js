var path = require('path');
var expressHandleBars = require('express-handlebars');
var keystone = require('keystone');

keystone.init({
    'name': 'LeonidaCrafts',
    
    'scss': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    
    'custom engine': expressHandleBars({
                        layoutsDir: path.join(__dirname, 'templates/views/layouts'),
                        defaultLayout: 'main',
//                        extname: '.hbs',
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

// mongodb models
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();