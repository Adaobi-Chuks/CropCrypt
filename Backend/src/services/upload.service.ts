import cloudinary from "../configs/cloudinary.configs";
import HttpException from "../utils/helpers/httpException.util";

export default async function uploadToBucket(filePath: any, folder: string) {
    const result = await cloudinary.uploader.upload(filePath, { folder: folder });
    const imageUrl = result.secure_url;
    if (!imageUrl) {
        throw new HttpException(400, "File upload failed");
    }
    return imageUrl;
}