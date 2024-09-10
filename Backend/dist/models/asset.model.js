"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_config_1 = require("../configs/constants.config");
const assetSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    amount: {
        type: Number,
        trim: true
    },
    roi: {
        type: Number,
        trim: true
    },
    purpose: {
        type: String,
        trim: true
    },
    timeline: {
        type: String,
        trim: true
    },
    shares: {
        type: Number,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },
    pofoUrl: {
        type: String,
        trim: true
    },
    aoiUrl: {
        type: String,
        trim: true
    },
    locUrl: {
        type: String,
        trim: true
    },
    cocUrl: {
        type: String,
        trim: true
    }
}, {
    strict: true,
    timestamps: true
});
const Campaign = (0, mongoose_1.model)(constants_config_1.DATABASES.ASSET, assetSchema, constants_config_1.DATABASES.ASSET);
exports.default = Campaign;
