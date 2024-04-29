import { Request, Response } from "express";
import GenerosMusicaisRepository from '../repositories/GenerosMusicaisRepository';

class GenerosMusicaisController {

    async index(req: Request, res: Response) {
        res.send('Hello, world!');
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

export default new GenerosMusicaisController();
