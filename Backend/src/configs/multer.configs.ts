import multer from "multer";
import path from "path";
import HttpException from "../utils/helpers/httpException.util";

const storage = multer.diskStorage({});

// Check file type
function checkFileTypeImage(file: Express.Multer.File, cb: multer.FileFilterCallback) {
  // Allowed extensions
  const filetypes = /img|jpeg|jpg|png/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new HttpException(400, "Invalid file type"));
  }
}

// Initialize upload variable
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileTypeImage(file, cb);
  }
});

export {
  upload
};