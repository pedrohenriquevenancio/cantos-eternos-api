import { ObjectId } from "mongodb";
import connect from "../database/connection";
import { PromiseReturn } from "../utils/types/PromiseReturn";
import { GeneroMusical } from './../utils/types/GeneroMusical';

class GenerosMusicais {

    async create(genero: GeneroMusical) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('generosMusicais').insertOne(genero);
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 201, data: JSON.parse(JSON.stringify(genero))});
            return reject({code: 400, data: {error: 'Bad Request'}});
        });
    }

    async findAll() : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('generosMusicais').find().toArray();
        return new Promise((resolve) => {
            return resolve({code: ((result.length > 0) ? 200 : 204), data: JSON.parse(JSON.stringify(result))});
        });
    }

    async findById(id: ObjectId) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('generosMusicais').findOne({_id:id});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: JSON.parse(JSON.stringify(result))});
            return reject({code: 204, data: {}});
        });
    }

    async update(id: ObjectId, genero: GeneroMusical) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('generosMusicais').updateOne({_id:id}, {$set: genero});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: result});
            return reject({code: 204, data: {}});
        });
    }

    async delete(id: ObjectId) : Promise<PromiseReturn> {
        const db = await connect();
        const result = await db.collection('generosMusicais').deleteOne({_id:id});
        return new Promise((resolve, reject) => {
            if (result) return resolve({code: 200, data: result});
            return reject({code: 204, data: {}});
        });
    }

}

export default new GenerosMusicais();
