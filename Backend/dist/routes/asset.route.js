"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asset_controller_1 = __importDefault(require("../controllers/asset.controller"));
const validate_middleware_1 = __importDefault(require("../middlewares/validate.middleware"));
const asset_schema_1 = require("../schemas/asset.schema");
const { createAsset, getAAsset, getAllAsset, deleteAsset, payOut, buyAsset } = new asset_controller_1.default();
const router = express_1.default.Router();
//create asset
router.post("/", (0, validate_middleware_1.default)(asset_schema_1.createSchema), createAsset);
//get a asset details
router.get("/:id", getAAsset);
//get all assets
router.get("/", getAllAsset);
//pay creators
router.patch("/pay/:id", payOut);
//delete a asset
router.delete("/:id", deleteAsset);
//delete a asset
router.post('/buy-shares', (0, validate_middleware_1.default)(asset_schema_1.buySchema), buyAsset);
exports.default = router;
