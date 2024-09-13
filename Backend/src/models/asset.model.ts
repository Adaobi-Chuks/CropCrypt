import { model, Schema } from "mongoose";
import IAsset from "../interfaces/asset.interface";
import { DATABASES } from "../configs/constants.config";

const assetSchema = new Schema<IAsset>({
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
    location: {
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
    sharesRemaining: {
        type: Number, 
        default: 0
    },
    size: {
        type: Number,
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

const Campaign = model<IAsset>(DATABASES.ASSET, assetSchema, DATABASES.ASSET);
export default Campaign;