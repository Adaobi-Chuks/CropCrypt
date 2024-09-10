"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_route_1 = __importDefault(require("./asset.route"));
const submission_route_1 = __importDefault(require("./submission.route"));
const upload_route_1 = __importDefault(require("./upload.route"));
const statusCodes_util_1 = require("../utils/statusCodes.util");
const router = (0, express_1.Router)();
const response_util_1 = __importDefault(require("../utils/helpers/response.util"));
/**API base route */
router.get("/", (req, res) => {
    return new response_util_1.default(statusCodes_util_1.OK, true, "Welcome, ensure to go through the API docs before using this service", res);
});
router.use("/asset", asset_route_1.default);
router.use("/submission", submission_route_1.default);
router.use('/upload', upload_route_1.default);
exports.default = router;
