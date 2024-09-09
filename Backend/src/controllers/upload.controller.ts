import { Request, Response } from "express";
import uploadToBucket from "../services/upload.service";
import CustomResponse from "../utils/helpers/response.util";
import HttpException from "../utils/helpers/httpException.util";
import { INTERNAL_SERVER_ERROR, OK } from "../utils/statusCodes.util";

export default class UploadController {
    async uploadImage(req: Request, res: Response) {
        try {
            if (req.files) {

                const imageUrls: string[] = [];

                if (Array.isArray(req.files)) {
                    for (const file of req.files) {
                        const imageUrl = await uploadToBucket(file.path, "CropCrypt");
                        imageUrls.push(imageUrl);
                    }
                }

                return new CustomResponse(OK, true, "Images uploaded successfully", res, imageUrls);
            }
        } catch (error: any) {
            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }
}
