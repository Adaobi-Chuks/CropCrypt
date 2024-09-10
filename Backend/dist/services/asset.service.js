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
const base_repository_1 = __importDefault(require("../repositories/base.repository"));
const asset_model_1 = __importDefault(require("../models/asset.model"));
const httpException_util_1 = __importDefault(require("../utils/helpers/httpException.util"));
const statusCodes_util_1 = require("../utils/statusCodes.util");
const AssetRepository = new base_repository_1.default(asset_model_1.default);
class AssetService {
    create(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield AssetRepository.create(asset);
            }
            catch (error) {
                throw new httpException_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, error.message);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetRepository.findById(id);
                if (!asset)
                    throw new httpException_util_1.default(statusCodes_util_1.NOT_FOUND, "Invalid Id");
                return asset;
            }
            catch (error) {
                if (error.status === statusCodes_util_1.NOT_FOUND)
                    throw error;
                throw new httpException_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, error.message);
            }
        });
    }
    findByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetRepository.find({ userId: id });
                return asset;
            }
            catch (error) {
                throw new httpException_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, error.message);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetRepository.find({ status: "open" });
                return asset;
            }
            catch (error) {
                throw new httpException_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, error.message);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetRepository.deleteById(id);
                if (!asset) {
                    throw new httpException_util_1.default(statusCodes_util_1.NOT_FOUND, "Asset not found");
                }
                return asset;
            }
            catch (error) {
                if (error.status === statusCodes_util_1.NOT_FOUND) {
                    throw error;
                }
                throw new httpException_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, `Error deleting asset: ${error.message}`);
            }
        });
    }
}
exports.default = AssetService;
