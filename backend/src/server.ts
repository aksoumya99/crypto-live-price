import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db';
import { fetchPeriodicCoinData } from './services/coinService';
import dataRoutes from './routes/dataRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

(async() => {
    await connectDB();
    fetchPeriodicCoinData();
})();

app.use('/api/data/', dataRoutes);

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})