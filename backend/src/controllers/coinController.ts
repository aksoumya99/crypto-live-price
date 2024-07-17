import { Request, Response } from 'express';
import Coin from '../models/coinModel';

export const getCoinData = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;
        const coinData = await Coin.find({code}).sort({timestamp: -1}).limit(20);
        res.json(coinData);
    } catch (err) {
        res.status(500).json({ error: err});
    }
}