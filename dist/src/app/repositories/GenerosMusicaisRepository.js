"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenerosMusicais {
    create(artista) {
        console.log('Artista criado com sucesso');
    }
    findAll() {
        console.log('Listando todos os artistas');
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
exports.default = new GenerosMusicais();
