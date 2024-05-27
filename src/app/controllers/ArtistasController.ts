import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import ArtistasRepository from '../repositories/ArtistasRepository';
import { Artista } from '../utils/types/Artista';
import isArtista from "../utils/validators/artistas/isArtista";
import idValid from "../utils/validators/idValid";
const dotenv = require('dotenv');
dotenv.config();

class ArtistasController {

    async index(req: Request, res: Response) {
        try {
            const result = await ArtistasRepository.findAll();
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    async show(req: Request, res: Response) {
        try {
            if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
            const result = await ArtistasRepository.findById(new ObjectId(req.params.id));
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    async store(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const api_key = process.env.NEXT_PUBLIC_TOKEN_SECRET as string;
            if (!api_key) return res.status(500).json({error: 'Internal Server Error'});
            if (token && token === api_key) {
                const artista : Artista = req.body;
                if (!isArtista(artista)) return res.status(400).json({error: 'Object is not of the type: Artista'});
                const result = await ArtistasRepository.create(artista);
                return res.status(result.code).json(result.data);
            }
            return res.status(401).json({error: 'Unauthorized'});
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }
    async update(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const api_key = process.env.NEXT_PUBLIC_TOKEN_SECRET as string;
            if (!api_key) return res.status(500).json({error: `Internal Server Error ${api_key} e ${token}`});
            if (token && token === api_key) {
                if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
                const artista : Artista = req.body;
                const result = await ArtistasRepository.update(new ObjectId(req.params.id), artista);
                return res.status(result.code).json(result.data);
            }
            return res.status(401).json({error: `Unauthorized ${token} e ${api_key}`});
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const api_key = process.env.NEXT_PUBLIC_TOKEN_SECRET as string;
            if (!api_key) return res.status(500).json({error: 'Internal Server Error'});
            if (token && token === api_key) {
                if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
                const result = await ArtistasRepository.delete(new ObjectId(req.params.id));
                return res.status(result.code).json(result.data);
            }
            return res.status(401).json({error: 'Unauthorized'});
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }

}

export default new ArtistasController();
