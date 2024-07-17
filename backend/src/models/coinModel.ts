import mongoose from "mongoose";

const CoinSchema = new mongoose.Schema({
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

export default mongoose.model('Coin', CoinSchema);