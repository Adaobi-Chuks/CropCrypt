"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const httpException_util_1 = __importDefault(require("../utils/helpers/httpException.util"));
const storage = multer_1.default.diskStorage({});
// Check file type
function checkFileTypeImage(file, cb) {
    // Allowed extensions
    const filetypes = /img|jpeg|jpg|png/;
    // Check extension
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    else {
        cb(new httpException_util_1.default(400, "Invalid file type"));
    }
}
// Initialize upload variable
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileTypeImage(file, cb);
    }
});
exports.upload = upload;
