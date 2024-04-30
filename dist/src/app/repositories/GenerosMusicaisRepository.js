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
const connection_1 = require("../database/connection");
class GenerosMusicais {
    create(genero) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, connection_1.default)();
            const result = yield db.collection('generosMusicais').insertOne(genero);
            return new Promise((resolve, reject) => {
                if (result)
                    return resolve({ code: 201, data: JSON.parse(JSON.stringify(genero)) });
                return reject({ code: 400, data: { error: 'Bad Request' } });
            });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, connection_1.default)();
            const result = yield db.collection('generosMusicais').find().toArray();
            return new Promise((resolve) => {
                return resolve({ code: ((result.length > 0) ? 200 : 204), data: JSON.parse(JSON.stringify(result)) });
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, connection_1.default)();
            const result = yield db.collection('generosMusicais').findOne({ _id: id });
            return new Promise((resolve, reject) => {
                if (result)
                    return resolve({ code: 200, data: JSON.parse(JSON.stringify(result)) });
                return reject({ code: 204, data: {} });
            });
        });
    }
    update(id, genero) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, connection_1.default)();
            const result = yield db.collection('generosMusicais').updateOne({ _id: id }, { $set: genero });
            return new Promise((resolve, reject) => {
                if (result)
                    return resolve({ code: 200, data: result });
                return reject({ code: 204, data: {} });
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, connection_1.default)();
            const result = yield db.collection('generosMusicais').deleteOne({ _id: id });
            return new Promise((resolve, reject) => {
                if (result)
                    return resolve({ code: 200, data: result });
                return reject({ code: 204, data: {} });
            });
        });
    }
}
exports.default = new GenerosMusicais();
