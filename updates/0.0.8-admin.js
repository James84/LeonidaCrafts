var keystone = require('keystone'),
    User = keystone.list('User'),    
    Gallery = keystone.list('Gallery');

module.exports = function(next){
    
    new Gallery.model({
        name: 'test album',
        images: ["E:\Dropbox\ProgrammerStuff\Front End\LeonidaCrafts\dist\images\Sparkle_25pc.jpg"]
    }).save();
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@keystonejs.com',
        password: 'admin',
        canAccessKeystone: true
	})
	.save(next);
};