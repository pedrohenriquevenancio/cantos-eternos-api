import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import GenerosMusicaisRepository from '../repositories/GenerosMusicaisRepository';
import isGeneroMusical from "../utils/validators/generosMusicais/isGeneroMusical";
import idValid from "../utils/validators/idValid";
import middleware from "../utils/validators/middleware";
import { GeneroMusical } from './../utils/types/GeneroMusical';

class GenerosMusicaisController {

    async index(req: Request, res: Response) {
        try {
            const result = await GenerosMusicaisRepository.findAll();
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    async show(req: Request, res: Response) {
        try {
            if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
            const result = await GenerosMusicaisRepository.findById(new ObjectId(req.params.id));
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    async store(req: Request, res: Response) {
        try {
            if (!middleware(req, res)) return res.status(401).json({error: 'Unauthorized'});
            const genero : GeneroMusical = req.body;
            if (!isGeneroMusical(genero)) return res.status(400).json({error: 'Object is not of the type: Genero Musical'});
            const result = await GenerosMusicaisRepository.create(genero);
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }
    async update(req: Request, res: Response) {
        try {
            if (!middleware(req, res)) return res.status(401).json({error: 'Unauthorized'});
            if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
            const genero : GeneroMusical = req.body;
            const result = await GenerosMusicaisRepository.update(new ObjectId(req.params.id), genero);
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }
    async delete(req: Request, res: Response) {
        try {
            if (!middleware(req, res)) return res.status(401).json({error: 'Unauthorized'});
            if (!idValid(req.params.id)) return res.status(400).json({error: 'Invalid ID'});
            const result = await GenerosMusicaisRepository.delete(new ObjectId(req.params.id));
            return res.status(result.code).json(result.data);
        } catch (error) {
            return res.status(500).json('Internal Server Error');
        }
    }

}

export default new GenerosMusicaisController();
