import moment from 'moment';
import numeral from 'numeral';

export const CoinPriceRow = ({index, coinPriceData}) => {
    const rate = coinPriceData?.rate.toFixed(2) || 0;
    const volume = numeral(coinPriceData?.volume).format('0.0000a') || 0;
    const marketCap = numeral(coinPriceData?.cap).format('0.0000a') || 0;
    const liquidity = numeral(coinPriceData?.liquidity.toFixed(2)).format('0.0000a') || 0;
    const time = moment(coinPriceData?.timestamp).format('MMMM Do, YYYY, h:mm:ss a') || 0;


    return (
        <tr className="border-b bg-white/10 border-white/20 font-sans">
            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                {index+1}
            </th>
            <td className="px-6 py-4">
                ${rate}
            </td>
            <td className="px-6 py-4">
                {volume}
            </td>
            <td className="px-6 py-4">
                {marketCap}
            </td>
            <td className="px-6 py-4">
                {liquidity}
            </td>
            <td className="px-6 py-4">
                {time}
            </td>
        </tr>
    )
}