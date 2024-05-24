"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenValid_1 = require("./tokenValid");
function middleware(token) {
    const tokenIsValid = (0, tokenValid_1.default)(token);
    return tokenIsValid;
}
exports.default = middleware;
