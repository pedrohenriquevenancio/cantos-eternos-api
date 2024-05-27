require('dotenv').config();

export default function middleware(token: string) {
    const api_key = process.env.TOKEN_SECRET as string;
    return token == api_key;
}