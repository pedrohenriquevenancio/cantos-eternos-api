"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
function tokenValid(token) {
    return token == process.env.TOKEN_SECRET;
}
exports.default = tokenValid;
