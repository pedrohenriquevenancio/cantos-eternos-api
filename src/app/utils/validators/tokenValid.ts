require('dotenv').config();

export default function tokenValid(token: string): boolean {
    return token === process.env.TOKEN_SECRET;
}