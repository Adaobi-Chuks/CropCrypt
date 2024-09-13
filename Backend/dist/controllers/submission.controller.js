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
const transaction_service_1 = __importDefault(require("../services/transaction.service"));
const SubmissionService = new transaction_service_1.default();
class SubmissionController {
    createSubmission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundSubmission = yield SubmissionService.findOne({
                    userId: req.body.userId,
                    submissionUrl: req.body.submissionUrl
                });
                if (foundSubmission) {
                    return new response_util_1.default(statusCodes_util_1.OK, true, "User already submitted the specified video", res, foundSubmission);
                }
                const submission = yield SubmissionService.create(req.body);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Submission submitted successfully", res, submission);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    disqualifyCreator(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield SubmissionService.deleteById(req.params.creatorId);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Creator disqualified successfully", res);
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
exports.default = SubmissionController;
