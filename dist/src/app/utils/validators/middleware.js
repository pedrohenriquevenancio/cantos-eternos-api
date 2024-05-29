"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idValid_1 = require("../validators/idValid");
const dotenv = require('dotenv');
dotenv.config();
function middleware(req, res, next) {
    const token = req.headers.authorization;
    const api_key = process.env.NEXT_PUBLIC_TOKEN_SECRET;
    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        if (!api_key)
            return res.status(500).json({ error: 'Internal Server Error' });
        if (token !== api_key)
            return res.status(403).json({ message: 'Unauthorized' });
    }
    if (['GET', 'PUT', 'DELETE'].includes(req.method)) {
        if (req.params.id && !(0, idValid_1.default)(req.params.id))
            return res.status(400).json({ error: 'Invalid ID' });
    }
    next();
}
exports.default = middleware;
