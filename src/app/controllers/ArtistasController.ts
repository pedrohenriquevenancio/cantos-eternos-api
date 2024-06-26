import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import ArtistasRepository from '../repositories/ArtistasRepository';
import { Artista } from '../utils/types/Artista';
import isArtista from "../utils/validators/artistas/isArtista";

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
            const result = await ArtistasRepository.findById(new ObjectId(req.params.id));
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    async store(req: Request, res: Response) {
        try {
            const artista : Artista = req.body;
            if (!isArtista(artista)) return res.status(400).json({error: 'Object is not of the type: Artista'});
            const result = await ArtistasRepository.create(artista);
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json(`Internal Server Error`);
        }
    }
    async update(req: Request, res: Response) {
        try {
            const artista : Artista = req.body;
            if (artista._id) {
                delete artista._id;
            }
            const result = await ArtistasRepository.update(new ObjectId(req.params.id), artista);
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json(`Internal Server Error`);
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const result = await ArtistasRepository.delete(new ObjectId(req.params.id));
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json(`Internal Server Error`);
        }
    }

}

export default new ArtistasController();
