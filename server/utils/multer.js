let multer = require("multer");

let upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "file/jpg") {
            cb(null, true);
        } else {
            var newError = new Error("File type is incorrect");
            newError.name = "MulterError";
            cb(newError, false);
        }
    }
});


module.exports = upload;


