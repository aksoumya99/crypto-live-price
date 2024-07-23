import { useSelector } from "react-redux";
import { getCoinPricesData } from "../redux/slices/coinPriceSlice";
import { coinMetaData } from "../utils/coinMetaData";

export const CoinNameCard = () => {
    const coinPricesData = useSelector(getCoinPricesData);
    const currentCoinPriceData = coinPricesData[0] || null;
    const currentCoinCode = currentCoinPriceData?.code || 'BTC';
    const currentCoinName = coinMetaData[currentCoinCode].name;
    const currentCoinIcon = coinMetaData[currentCoinCode].icon;
    const currentCoinPrice = currentCoinPriceData?.rate.toFixed(2) || 0;

    return (
        <div className="text-white w-96 p-2 rounded bg-white/10 m-1 flex items-center flex-start">
            <img src={currentCoinIcon} className="max-h-12 max-w-12 w-2/12 object-contain" />
            <div className="w-5/12 pl-4 font-pixel">
                <p className="text-2xl">{currentCoinName}</p>
                <p className="text-sm text-white/50">{currentCoinCode}</p>
            </div>
            <div className="w-5/12 pl-4 font-pixel">
                <p className="text-2xl">${currentCoinPrice}</p>
                <p className="text-sm text-white/50">1.000000 {currentCoinCode}</p>
            </div>
        </div>
    )
}