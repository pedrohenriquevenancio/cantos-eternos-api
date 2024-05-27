"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
function middleware(token) {
    const api_key = process.env.TOKEN_SECRET;
    return token == api_key;
}
exports.default = middleware;
