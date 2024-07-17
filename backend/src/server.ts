import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db';
import { fetchPeriodicCoinData } from './services/coinService';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

(async() => {
    await connectDB();
    fetchPeriodicCoinData();
})();

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})