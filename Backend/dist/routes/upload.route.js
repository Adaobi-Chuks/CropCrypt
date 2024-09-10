"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_controller_1 = __importDefault(require("../controllers/upload.controller"));
const multer_configs_1 = require("../configs/multer.configs");
const router = express_1.default.Router();
const { uploadImage } = new upload_controller_1.default();
const response_util_1 = __importDefault(require("../utils/helpers/response.util"));
//upload an image
router.post("/images", (req, res, next) => {
    multer_configs_1.upload.array("images")(req, res, (err) => {
        if (err) {
            return new response_util_1.default(500, false, err.message, res);
        }
        next();
    });
}, uploadImage);
exports.default = router;
