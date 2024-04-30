import { ObjectId } from 'mongodb';
import connect from "../database/connection";
import { Artista } from '../utils/types/Artista';
import { PromiseReturn } from '../utils/types/PromiseReturn';

class ArtistasRepository {

    async create(artista: Artista) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('artistas').insertOne(artista);
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 201, data: JSON.parse(JSON.stringify(artista))});
            return reject({code: 400, data: {error: 'Bad Request'}});
        });
    }

    async findAll() : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('artistas').find().toArray();
        return new Promise((resolve) => {
            return resolve({code: ((result.length > 0) ? 200 : 204), data: JSON.parse(JSON.stringify(result))});
        });
    }

    async findById(id: ObjectId) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('artistas').findOne({_id:id});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: JSON.parse(JSON.stringify(result))});
            return reject({code: 204, data: {}});
        });
    }

    async update(id: ObjectId, artista: Artista) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('artistas').updateOne({_id:id}, {$set: artista});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: JSON.parse(JSON.stringify(artista))});
            return reject({code: 204, data: {}});
        });
    }

    async delete(id: ObjectId) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('artistas').deleteOne({_id:id});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: JSON.parse(JSON.stringify(result))});
            return reject({code: 204, data: {}});
        });
    }

}

export default new ArtistasRepository();
