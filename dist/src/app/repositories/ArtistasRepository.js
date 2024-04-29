"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArtistaSchema_1 = require("../database/schemas/ArtistaSchema");
class ArtistasRepository {
    create(artista) {
        console.log('Artista criado com sucesso');
    }
    findAll() {
        console.log('Listando todos os artistas');
        mongoose_1.default.connection.once('open', () => {
            console.log('Conexão bem-sucedida com o banco de dados');
        });
        mongoose_1.default.connection.on('error', (error) => {
            console.error('Erro de conexão com o banco de dados:', error);
        });
        return new Promise((resolve, reject) => {
            const ARTISTAS = mongoose_1.default.model('artistas', ArtistaSchema_1.default);
            ARTISTAS.find()
                .maxTimeMS(50000)
                .then((result) => {
                return resolve(result);
            })
                .catch((error) => {
                console.log('Erro ao listar artistas', error);
                return reject(error);
            });
        });
    }
    findById(id) {
        console.log('Listando artista por id');
    }
    update(id, artista) {
        console.log('Artista atualizado com sucesso');
    }
    delete(id) {
        console.log('Artista deletado com sucesso');
    }
}
exports.default = new ArtistasRepository();
