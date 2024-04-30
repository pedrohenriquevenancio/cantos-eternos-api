"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/index");
const connection_1 = require("./src/app/database/connection");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const client = (0, connection_1.default)();
client.then(() => {
    console.log('Connected to MongoDB');
    index_1.default.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
    .catch(console.dir);
