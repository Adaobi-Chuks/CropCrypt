import express from 'express';
import UploadController from '../controllers/upload.controller';
import { upload } from '../configs/multer.configs';
const router = express.Router();
const { uploadImage } = new UploadController();
import CustomResponse from "../utils/helpers/response.util";

//upload an image
router.post("/images", (req, res, next) => {
    upload.array("images")(req, res, (err: any) => {
        if (err) {
            return new CustomResponse(500, false, err.message, res)
        }
        next()
    })
}, uploadImage);

export default router;