// controller for gallery page
var keystone = require('keystone');
var Gallery = keystone.list('Gallery'); 

exports = module.exports = function(req, res) {
    
    Gallery
    .model
    .find()
    .limit(100)
    .exec(function(err, images){
        if(err){
            throw err;
        }
        
        var view = new keystone.View(req, res);
    
        view.render('gallery', {
            images: images
        });   
    });
}