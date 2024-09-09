import { Request, Response } from "express";
// import { ethers } from "ethers";
import ContractABI from "../ABI/assetManagerABI.json";
import CustomResponse from "../utils/helpers/response.util";
import HttpException from "../utils/helpers/httpException.util";
import { INTERNAL_SERVER_ERROR, OK } from "../utils/statusCodes.util";
import Asset from "../services/asset.service";
import Submission from "../services/submission.service";
const AssetService = new Asset();

export default class AssetController {

    async createAsset(req: Request, res: Response) {

        try {

            const asset = await AssetService.create(req.body);

            return new CustomResponse(OK, true, "Asset created successfully", res, asset);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getAllAsset(_req: Request, res: Response) {

        try {

            const assets = await AssetService.findAll();

            return new CustomResponse(OK, true, "All assets fetched successfully", res, assets);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getAAsset(req: Request, res: Response) {

        try {

            const asset = await AssetService.findById(req.params.id);

            return new CustomResponse(OK, true, "Asset fetched successfully", res, asset);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async deleteAsset(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const deletedAsset = await AssetService.deleteById(id);

            return new CustomResponse(OK, true, "Asset deleted successfully", res, deletedAsset);
        } catch (error: any) {
            if (error instanceof HttpException) {
                return new CustomResponse(error.status, false, error.message, res);
            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async payOut(req: Request, res: Response) {
        try {


            return new CustomResponse(OK, true, "Creators paid successfully", res);
        } catch (error: any) {
            if (error instanceof HttpException) {
                return new CustomResponse(error.status, false, error.message, res);
            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

}