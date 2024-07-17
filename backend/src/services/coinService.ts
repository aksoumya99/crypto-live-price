import axios from 'axios';
import Coin from '../models/coinModel';

const fetchCoinDataUtil = async () => {
    const coinCodes = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];
    const apiUrl = 'https://api.livecoinwatch.com/coins/single';
    const defaultApiKey = '6b5f1f45-8b4f-4e4a-b0f2-91ea6330f7a5';
    const apiKey = process.env.API_KEY || defaultApiKey;

    const promises = coinCodes.map(coinCode => {
        return axios.post(
            apiUrl,
            {
                currency: 'USD',
                code: coinCode,
                meta: true
            },
            {
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': apiKey
                }
            }
        ).then(response => {
            const {
                name,
                rank,
                allTimeHighUSD,
                circulatingSupply,
                totalSupply,
                maxSupply,
                rate,
                volume,
                cap,
                liquidity
            } = response.data;

            const coinData = {
                code: coinCode,
                name,
                rank,
                allTimeHighUSD,
                circulatingSupply,
                totalSupply,
                maxSupply,
                rate,
                volume,
                cap,
                liquidity
            };

            return coinData;
        }).catch(err => {
            console.log(`Error fetching data for ${coinCode}:`, err);
            return null;
        });
    });

    const coinsData = await Promise.all(promises);
    
    coinsData.forEach(async (coinData) => {
        const coinDocument = new Coin(coinData);
        await coinDocument.save();
    });
}

export const fetchPeriodicCoinData = () => {
    fetchCoinDataUtil();
    setInterval(fetchCoinDataUtil, 5000);
}