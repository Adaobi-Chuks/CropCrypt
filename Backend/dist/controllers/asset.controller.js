"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_util_1 = __importDefault(require("../utils/helpers/response.util"));
const httpException_util_1 = __importDefault(require("../utils/helpers/httpException.util"));
const statusCodes_util_1 = require("../utils/statusCodes.util");
const asset_service_1 = __importDefault(require("../services/asset.service"));
const AssetService = new asset_service_1.default();
class AssetController {
    createAsset(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetService.create(req.body);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Asset created successfully", res, asset);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getAllAsset(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const assets = yield AssetService.findAll();
                return new response_util_1.default(statusCodes_util_1.OK, true, "All assets fetched successfully", res, assets);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getAAsset(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetService.findById(req.params.id);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Asset fetched successfully", res, asset);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    deleteAsset(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deletedAsset = yield AssetService.deleteById(id);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Asset deleted successfully", res, deletedAsset);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    payOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new response_util_1.default(statusCodes_util_1.OK, true, "Creators paid successfully", res);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
}
exports.default = AssetController;
