const express = require('express');
const cors = require('cors');
import { Request, Response } from 'express';
import ArtistasController from './app/controllers/ArtistasController';
import GenerosMusicaisController from './app/controllers/GenerosMusicaisController';
import middleware from './app/utils/validators/middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware);

app.get('/', (req: Request, res: Response) => {
    return res.json({message: 'API - Cantos Eternos'});
});

app.get('/artistas/', ArtistasController.index);
app.get('/artistas/:id', ArtistasController.show);
app.post('/artistas/', ArtistasController.store);
app.put('/artistas/:id', ArtistasController.update);
app.delete('/artistas/:id', ArtistasController.delete);

app.get('/generosMusicais/', GenerosMusicaisController.index);
app.get('/generosMusicais/:id', GenerosMusicaisController.show);
app.post('/generosMusicais/', GenerosMusicaisController.store);
app.put('/generosMusicais/:id', GenerosMusicaisController.update);
app.delete('/generosMusicais/:id', GenerosMusicaisController.delete);

export default app;
