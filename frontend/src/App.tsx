import { useEffect } from 'react'
import './App.css'
import { CoinBasicDetails } from './components/coinBasicDetails'
import { fetchPrice } from './redux/slices/coinPriceSlice'
import { CoinPriceTable } from './components/coinPriceTable'
import { Heading } from './components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { getToggleStatus } from './redux/slices/showPopupSlice'
import { CoinSelectModal } from './components/coinSelectModal'
import { getCurrentCoin } from './redux/slices/currentCoinSlice'

function App() {
  const dispatch = useDispatch();
  const showPopup = useSelector(getToggleStatus);
  const coinCode = useSelector(getCurrentCoin);

  useEffect(() => {
    dispatch(fetchPrice(coinCode));

    const interval = setInterval(() => {
      console.log("refetch");
      dispatch(fetchPrice(coinCode));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, coinCode]);

  return (
    <div>
      <div className={`flex flex-col min-h-screen justify-start items-center bg-black ${showPopup ? 'opacity-40' : 'opacity-100'}`}>
        <Heading />
        <CoinBasicDetails />
        <CoinPriceTable />
      </div>
      <CoinSelectModal />
    </div>
  )
}

export default App
