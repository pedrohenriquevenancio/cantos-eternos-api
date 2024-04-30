"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_NAME;
let singleton;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (singleton)
            return singleton;
        const client = new MongoClient(URI);
        try {
            yield client.connect();
            singleton = client.db(DB_NAME);
            return singleton;
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.default = connect;
