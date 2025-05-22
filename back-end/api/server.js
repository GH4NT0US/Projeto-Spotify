import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', (request, response) => {
    response.send('Olá Mundo!');
});

async function setupRoutes() {
    app.get('/artists', async (request, response) => {
        const artists = await db.collection('artists').find({}).toArray();
        response.send(artists);
    });

    app.get('/songs', async (request, response) => {
        const songs = await db.collection('songs').find({}).toArray();
        response.send(songs);
    });
}

app.listen(PORT, async () => {
    await setupRoutes();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
