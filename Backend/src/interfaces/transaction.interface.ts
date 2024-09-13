import { Document } from 'mongoose';

export default interface ITransaction extends Document {
    assetId: string;
    userId: string;
    sharesBought: number;
}