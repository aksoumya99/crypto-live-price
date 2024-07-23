import { useSelector } from "react-redux";
import { CoinPriceRow } from "../components/coinPriceRow";
import { getCoinPricesData } from "../redux/slices/coinPriceSlice";

export const CoinPriceTable = () => {
    const coinPricesData = useSelector(getCoinPricesData);
    
    return (
        <div className="flex items-center justify-center w-10/12 m-8">
            <div className="w-full relative overflow-x-auto rounded-lg shadow-2xl">
                <table className="w-full text-sm text-left rtl:text-right text-white font-pixel">
                    <thead className="font-extrabold uppercase bg-white/20 text-white text-lg antialiased">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S. No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Volume
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Market Cap
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Liquidity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coinPricesData.map((coinPriceData, index) => {
                                return <CoinPriceRow index={index} coinPriceData={coinPriceData}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}