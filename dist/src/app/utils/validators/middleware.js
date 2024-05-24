"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenValid_1 = require("./tokenValid");
function middleware(req, res) {
    const token = req.headers.authorization;
    const tokenIsValid = (0, tokenValid_1.default)(token);
    console.log(`Token: ${token}\nToken is valid: ${tokenIsValid}`);
    if (!token || !tokenIsValid)
        return res.status(401).json({ error: 'Unauthorized' });
}
exports.default = middleware;
