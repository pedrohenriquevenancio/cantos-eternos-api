"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArtistaSchema = new mongoose_1.default.Schema({
    nome: String,
    nacionalidade: String,
    cor: String,
    sexo: String,
    nascimento: String,
    falecimento: String,
    srcBtn: String,
    srcPerfil: String,
    color: String,
    slides: [],
    biografia: String,
    generosMusicais: [],
    qtdMusicas: Number,
    grandesSucessos: [],
    links: []
});
exports.default = ArtistaSchema;
