import { Document } from 'mongoose';

export default interface ICampaign extends Document {
    userId: string;
    image: string;
    name: string;
    description: string;
    type: string;
    amount: number;
    roi: number;
    purpose: string;
    timeline: string;
    shares: number;
    sharesRemaining: number;
    location: string;
    size: number;
    pofoUrl: string;
    aoiUrl: string;
    locUrl: string;
    cocUrl: string;
}