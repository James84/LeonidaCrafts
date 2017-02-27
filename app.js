var path = require('path');
var express = require('express');
var expressHandleBars = require('express-handlebars');

var app = express();

var port = process.env.PORT || 8000;

// set public folder as static so styles and scripts are available externally
app.use(express.static('public'));

app.engine('.hbs', expressHandleBars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutDir: path.join(__dirname, 'views/layouts'),
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
}));
  
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    //render homepage
    res.render('home', {
        name: 'James'
    }); 
});

app.get('/gallery', function(req, res){
    res.render('gallery');
});

app.listen(port, function(err){
    console.log('server listening on server ' + port); 
});