// const multer = require("multer");
// const {GridFsStorage} = require("multer-gridfs-storage");
// const crypto = require("crypto");
// const path = require("path");
// require("dotenv").config();

// const mongoURI = process.env.MONGODB_URI; // storages mongodb uri in environment variables for security
// // create storage engine
// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//             return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//         });
//     });
//     }
// });
// const upload = multer({ storage });
// module.exports = upload;