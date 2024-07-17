import express from 'express';
import dotenv from 'dotenv';

import './services/coinService';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})