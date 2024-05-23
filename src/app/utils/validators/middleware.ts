import { Request, Response } from "express";
import tokenValid from "./tokenValid";

export default function middleware(req: Request, res: Response) {
    const token = req.headers.authorization;
    if (!token || !tokenValid(token)) return res.status(401).json({error: 'Unauthorized'});
}