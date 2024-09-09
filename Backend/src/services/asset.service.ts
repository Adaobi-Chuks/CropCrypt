import IAsset from "../interfaces/asset.interface";
import BaseRepository from "../repositories/base.repository";
import Asset from "../models/asset.model";
import HttpException from "../utils/helpers/httpException.util";
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from "../utils/statusCodes.util";
const AssetRepository = new BaseRepository(
    Asset
);

export default class AssetService {

    async create(asset: IAsset) {
        try {

            return await AssetRepository.create(asset);

        } catch (error: any) {

            throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async findById(id: string) {
        try {

            const asset = await AssetRepository.findById(id);

            if (!asset) throw new HttpException(NOT_FOUND, "Invalid Id");

            return asset;

        } catch (error: any) {

            if (error.status === NOT_FOUND) throw error;

            throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async findByUserId(id: string) {
        try {

            const asset = await AssetRepository.find({ userId: id });

            return asset;

        } catch (error: any) {

            throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async findAll() {
        try {

            const asset = await AssetRepository.find({ status: "open" });

            return asset;

        } catch (error: any) {

            throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async deleteById(id: string) {
        try {
            const asset = await AssetRepository.deleteById(id);

            if (!asset) {
                throw new HttpException(NOT_FOUND, "Asset not found");
            }

            return asset;
        } catch (error: any) {
            if (error.status === NOT_FOUND) {
                throw error;
            }
            throw new HttpException(INTERNAL_SERVER_ERROR, `Error deleting asset: ${error.message}`);
        }
    }

}
