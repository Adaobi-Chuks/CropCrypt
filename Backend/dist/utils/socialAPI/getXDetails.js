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
exports.getXDetails = getXDetails;
const axios_1 = __importDefault(require("axios"));
function getXDetails(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = (url.match(/status\/(\d+)/) || [])[1] || null;
        const options = {
            method: 'GET',
            url: 'https://twitter154.p.rapidapi.com/tweet/details',
            params: {
                tweet_id: id
            },
            headers: {
                'x-rapidapi-key': '5d840197b3msh4526b840a6b5f15p18bc4ejsn04e88ba7d7ae',
                'x-rapidapi-host': 'twitter154.p.rapidapi.com'
            }
        };
        const { data } = yield axios_1.default.request(options);
        return {
            likes: data.favorite_count,
            comments: data.reply_count
        };
    });
}
