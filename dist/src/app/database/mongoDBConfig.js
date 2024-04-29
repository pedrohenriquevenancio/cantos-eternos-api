"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
exports.default = client;
