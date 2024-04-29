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
const mongoDBConfig_1 = require("./src/app/database/mongoDBConfig");
const index_1 = require("./src/index");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoDBConfig_1.default.connect();
            yield mongoDBConfig_1.default.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            index_1.default.listen(PORT, () => {
                console.log(`Server is running on port http://localhost:${PORT}`);
            });
        }
        finally {
            yield mongoDBConfig_1.default.close();
        }
    });
}
run().catch(console.dir);
