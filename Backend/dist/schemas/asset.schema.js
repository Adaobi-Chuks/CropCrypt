"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buySchema = exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const createSchema = joi_1.default.object({
    userId: joi_1.default.string().required().trim(),
    image: joi_1.default.string().required().trim(),
    name: joi_1.default.string().required().trim(),
    description: joi_1.default.string().required().trim(),
    type: joi_1.default.string().required().trim(),
    amount: joi_1.default.number().required(),
    roi: joi_1.default.number().required(),
    purpose: joi_1.default.string().required().trim(),
    timeline: joi_1.default.string().required().trim(),
    shares: joi_1.default.number().required(),
    size: joi_1.default.string().required().trim(),
    pofoUrl: joi_1.default.string().required().trim(),
    aoiUrl: joi_1.default.string().required().trim(),
    locUrl: joi_1.default.string().required().trim(),
    cocUrl: joi_1.default.string().required().trim()
});
exports.createSchema = createSchema;
const buySchema = joi_1.default.object({
    assetId: joi_1.default.string().required().trim(),
    userId: joi_1.default.string().required().trim(),
    shares: joi_1.default.number().required()
});
exports.buySchema = buySchema;
