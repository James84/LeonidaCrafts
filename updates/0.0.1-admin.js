var keystone = require('keystone');
    User = keystone.List('User');

exports = module.exports = function(next){
    
    new User.model({
        name: {
            first: 'Admin',
            last: 'User'
        },
        email: 'admin@keystonejs.com',
        passwword: 'admin',
        canAccessKeystone: true
    }).save(next);
};