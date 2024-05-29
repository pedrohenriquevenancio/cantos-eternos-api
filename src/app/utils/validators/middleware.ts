import { NextFunction, Request, Response } from 'express';
import idValid from "../validators/idValid";

const dotenv = require('dotenv');
dotenv.config();

export default function middleware(req: Request, res: Response, next: NextFunction) : void | Response {
    const token = req.headers.authorization as string;
    const api_key = process.env.NEXT_PUBLIC_TOKEN_SECRET as string;

    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        if (!api_key) return res.status(500).json({ error: 'Internal Server Error' });

        if (token !== api_key) return res.status(403).json({ message: 'Unauthorized' });
    }

    if (['GET', 'PUT', 'DELETE'].includes(req.method)) {
        if (req.params.id && !idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
    }

    next();
}