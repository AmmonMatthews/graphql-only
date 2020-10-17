import express from 'express';
import cors from 'cors';

import { makeExecutableSchema } from "graphql-tools";

const api = express();

api.use(express.json());
api.use(cors());

api.get('/', (req, res) => {
    res.status(200).json({ welcome: "This is our Tasks API" })
})

const PORT = 4000

api.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})