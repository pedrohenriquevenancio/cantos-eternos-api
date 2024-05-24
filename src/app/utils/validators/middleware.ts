import { Request, Response } from "express";
import tokenValid from "./tokenValid";

export default function middleware(token: string) {
    const tokenIsValid = tokenValid(token as string);
    return tokenIsValid;
}