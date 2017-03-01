var keystone = require('keystone');
var Types = keystone.Field.Types;

var myStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/images'),// required; path where the files should be stored
        publicPath: 'public/images'// path where files will be served
    }
});

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Images',
	singular: 'Image',
});


Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	path: { type: Types.File, storage: myStorage },
});

Gallery.track = true;
Gallery.defaultSort = 'publishedDate';
Gallery.defaultColumns = 'name, publishedDate, image';
Gallery.register();