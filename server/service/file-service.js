const fs = require("fs");
const path = require("path");
const multer = require("multer");

class FileService {
    // const storageConfig = multer.diskStorage({
    //     destination: (req, file, cb) =>{
    //         cb(null, "uploads");
    //     },
    //     filename: (req, file, cb) =>{
    //         cb(null, file.originalname);
    //     }
    // });
}

module.exports = new FileService();
