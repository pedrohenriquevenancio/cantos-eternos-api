import { Request, Response } from "express";
import ArtistasRepository from '../repositories/ArtistasRepository';

class ArtistasController {

    async index(req: Request, res: Response) {
        const result = await ArtistasRepository.findAll();
        // if (result) {
        //     return res.status(204).send('Nenhum artista encontrado');
        // }
        res.send(result);
    }
    async show(req: Request, res: Response) {
        res.send('SHOW');
    }
    async store(req: Request, res: Response) {
        res.send('STORE');
    }
    async update(req: Request, res: Response) {
        res.send('UPDATE');
    }
    async delete(req: Request, res: Response) {
        res.send('DELETE');
    }

}

export default new ArtistasController();
