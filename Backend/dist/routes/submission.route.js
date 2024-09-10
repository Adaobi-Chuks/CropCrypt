"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const submission_controller_1 = __importDefault(require("../controllers/submission.controller"));
const { createSubmission, disqualifyCreator } = new submission_controller_1.default();
const router = express_1.default.Router();
//create submission
router.post("/", createSubmission);
//disqualify a creator
router.delete("/:creatorId", disqualifyCreator);
exports.default = router;
