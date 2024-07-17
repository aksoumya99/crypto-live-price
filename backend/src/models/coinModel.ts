import mongoose from "mongoose";

const CoinSchema = new mongoose.Schema({
    code: String,
    name: String,
    rank: Number,
    timestamp: { type: Date, default: Date.now },
    allTimeHighUSD: Number,
    circulatingSupply: Number,
    totalSupply: Number,
    maxSupply: Number,
    rate: Number,
    volume: Number,
    cap: Number,
    liquidity: Number
});

CoinSchema.index({code: 1, timestamp: -1});

export default mongoose.model('Coin', CoinSchema);