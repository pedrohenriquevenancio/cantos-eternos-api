import mongoose from "mongoose";
import ArtistaSchema from '../database/schemas/ArtistaSchema';

class ArtistasRepository {

    create(artista: any) {
        console.log('Artista criado com sucesso');
    }

    findAll() : Promise<any> {
        console.log('Listando todos os artistas');
        return new Promise((resolve, reject) => {
            const ARTISTAS = mongoose.model('artistas', ArtistaSchema);
            ARTISTAS.find()
            .maxTimeMS(50000)
            .then((result: any) => {
                return resolve(result);
            })
            .catch((error: any) => {
                console.log('Erro ao listar artistas', error);
                return reject(error);
            });
        })
    }

    findById(id: any) {
        console.log('Listando artista por id');
    }

    update(id: any, artista: any) {
        console.log('Artista atualizado com sucesso');
    }

    delete(id: any) {
        console.log('Artista deletado com sucesso');
    }

}

export default new ArtistasRepository();
