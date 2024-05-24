"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenValid_1 = require("./tokenValid");
function middleware(req, res) {
    const token = req.headers.authorization;
    const tokenIsValid = (0, tokenValid_1.default)(token);
    return token && tokenIsValid;
}
exports.default = middleware;
