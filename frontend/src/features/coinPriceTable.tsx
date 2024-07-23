import { useDispatch, useSelector } from "react-redux"
import { fetchPrice, getCoinPrice, getFetchStatus } from "./coinPriceSlice";
import { CoinPriceRow } from "./coinPriceRow";

export const CoinPriceTable = () => {
    const dispatch = useDispatch();
    const btcPrice = useSelector(getCoinPrice);

    setInterval(() => {
        console.log("refetch");
        dispatch(fetchPrice())
    }, 5000);

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
                        <CoinPriceRow/>
                        <CoinPriceRow/>
                        <CoinPriceRow/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}