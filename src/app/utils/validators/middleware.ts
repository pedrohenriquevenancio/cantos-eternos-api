import { Request, Response } from "express";
import tokenValid from "./tokenValid";

export default function middleware(req: Request, res: Response) {
    const token = req.headers.authorization;
    const tokenIsValid = tokenValid(token as string);
    console.log(
        `Token: ${token}\nToken is valid: ${tokenIsValid}`
    );
    
    if (!token || !tokenIsValid) return res.status(401).json({error: 'Unauthorized'});
}