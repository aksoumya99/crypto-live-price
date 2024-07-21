import { useDispatch, useSelector } from "react-redux"
import { fetchPrice, getCoinPrice, getFetchStatus } from "./coinPriceSlice";

export const CoinPriceTable = () => {
    const dispatch = useDispatch();
    const btcPrice = useSelector(getCoinPrice);
    
    setInterval(() => {
        console.log("refetch");
        dispatch(fetchPrice())
    }, 5000);

    return (
        <>
            <h1>Hello!</h1>
            <h1>{btcPrice}</h1>
        </>
    )
}