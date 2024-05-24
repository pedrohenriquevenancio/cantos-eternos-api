require('dotenv').config();

export default function tokenValid(token: string): boolean {
    console.log('tokenValid', token, process.env.TOKEN_SECRET);
    return token === process.env.TOKEN_SECRET;
}