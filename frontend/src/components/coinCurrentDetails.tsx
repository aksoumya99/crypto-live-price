import { useSelector } from "react-redux";
import { getCoinPricesData } from "../redux/slices/coinPriceSlice";
import numeral from 'numeral';

export const CoinCurrentDetails = () => {
    const coinPricesData = useSelector(getCoinPricesData);
    const currentCoinPriceData = coinPricesData[0] || null;
    const rank = currentCoinPriceData?.rank || 0;
    const allTimeHighUSD = currentCoinPriceData?.allTimeHighUSD.toFixed(2) || 0;
    const totalSupply = numeral(currentCoinPriceData?.totalSupply).format('0.0000a') || 0;
    const maxSupply = numeral(currentCoinPriceData?.maxSupply).format('0.0000a') || 0;
    const volume = numeral(currentCoinPriceData?.volume).format('0.0000a') || 0;
    const marketCap = numeral(currentCoinPriceData?.cap).format('0.0000a') || 0;
    const volByCap = ((currentCoinPriceData?.volume/currentCoinPriceData?.cap)*100).toFixed(2) || 0;
    

    return (
        <div className="text-white w-200 p-2 rounded bg-white/10 m-1 flex items-center flex-start font-sans">
            <div className="pl-2">
                <p className="text-sm text-white/50 font-pixel">Rank</p>
                <p className="text-xl">{rank}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">All Time High {"(USD)"}</p>
                <p className="text-xl">${allTimeHighUSD}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">Total Supply</p>
                <p className="text-xl">{totalSupply}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">Max Supply</p>
                <p className="text-xl">{maxSupply}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">Volume</p>
                <p className="text-xl">{volume}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">Market Cap</p>
                <p className="text-xl">{marketCap}</p>
            </div>
            <div className="pl-4">
                <p className="text-sm text-white/50 font-pixel">Vol/Cap</p>
                <p className="text-xl">{volByCap}%</p>
            </div>
        </div>
    )
}