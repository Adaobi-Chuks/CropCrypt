"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_config_1 = require("../configs/constants.config");
const submissionSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        trim: true
    },
    submissionUrl: {
        type: String,
        trim: true
    },
    campaignId: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
}, {
    strict: true,
    timestamps: true
});
const Submission = (0, mongoose_1.model)(constants_config_1.DATABASES.SUBMISSION, submissionSchema, constants_config_1.DATABASES.SUBMISSION);
exports.default = Submission;
