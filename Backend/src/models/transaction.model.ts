import { model, Schema } from "mongoose";
import ITransaction from "../interfaces/transaction.interface";
import { DATABASES } from "../configs/constants.config";

const transactionSchema = new Schema<ITransaction>({
    assetId: {
        type: String,
        ref: DATABASES.ASSET,
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

const Transaction = model<ITransaction>(DATABASES.TRANSACTION, transactionSchema, DATABASES.TRANSACTION);
export default Transaction;