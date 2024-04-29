import { LinkType } from './../../types/LinkType';
import mongoose from "mongoose";

const ArtistaSchema = new mongoose.Schema({
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

export default ArtistaSchema;
