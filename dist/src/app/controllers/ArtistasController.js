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
const ArtistasRepository_1 = require("../repositories/ArtistasRepository");
class ArtistasController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ArtistasRepository_1.default.findAll();
            // if (result) {
            //     return res.status(204).send('Nenhum artista encontrado');
            // }
            res.send(result);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('SHOW');
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('STORE');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('UPDATE');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('DELETE');
        });
    }
}
exports.default = new ArtistasController();
