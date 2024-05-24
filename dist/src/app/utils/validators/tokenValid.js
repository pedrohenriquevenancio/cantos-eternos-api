"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
function tokenValid(token) {
    console.log('tokenValid', token, process.env.TOKEN_SECRET);
    return token === process.env.TOKEN_SECRET;
}
exports.default = tokenValid;
