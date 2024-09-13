"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_config_1 = require("../configs/constants.config");
const transactionSchema = new mongoose_1.Schema({
    assetId: {
        type: String,
        ref: constants_config_1.DATABASES.ASSET,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    sharesBought: {
        type: Number,
        required: true
    }
}, {
    strict: true,
    timestamps: true
});
const Transaction = (0, mongoose_1.model)(constants_config_1.DATABASES.TRANSACTION, transactionSchema, constants_config_1.DATABASES.TRANSACTION);
exports.default = Transaction;
