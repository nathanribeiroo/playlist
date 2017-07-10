var multer = require('multer'),
    ini = require('../../config/ini');

var upload = function () {
        
    this.storage = multer.diskStorage({
        
        destination: function (request, file, callback) {
            callback(null, ini.destination);
        },

        filename: function (request, file, callback) {
            console.log(file);
            callback(null, file.originalname)
        }
    });
};

upload.prototype.up = function (request, response, callback) {
    
    var video = multer({ storage: this.storage }).array('photo', 5);

    video(request, response, (err) => {
        if(err)
            return callback(err);

        console.log(request.files);
        response.end('Your Files Uploaded');
        console.log('Photo Uploaded');
        callback(err);
    });
};