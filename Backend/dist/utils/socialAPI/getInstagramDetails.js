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
exports.getInstagramDetails = getInstagramDetails;
const axios_1 = __importDefault(require("axios"));
function getInstagramDetails(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = (url.match(/\/p\/([^\/?]+)/) || [])[1] || null;
        const likesOptions = {
            method: 'GET',
            url: `https://instagram243.p.rapidapi.com/postlikes-new/${id}/12/%7Bend_cursor%7D`,
            headers: {
                'x-rapidapi-key': 'ca4c435548msh7f0ac0c59a0544bp14e220jsne5582a262ffd',
                'x-rapidapi-host': 'instagram243.p.rapidapi.com'
            }
        };
        const { data: likes } = yield axios_1.default.request(likesOptions);
        const commentsOptions = {
            method: 'GET',
            url: `https://instagram243.p.rapidapi.com/postcomments/${id}/%7Bend_cursor%7D/%7Bscraperid%7D`,
            headers: {
                'x-rapidapi-key': 'ca4c435548msh7f0ac0c59a0544bp14e220jsne5582a262ffd',
                'x-rapidapi-host': 'instagram243.p.rapidapi.com'
            }
        };
        const { data: comments } = yield axios_1.default.request(commentsOptions);
        return {
            likes: likes.data.likes.length,
            comments: comments.data.comments.length
        };
    });
}
