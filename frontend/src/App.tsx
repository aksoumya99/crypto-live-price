import './App.css'
import { CoinBasicDetails } from './features/coinBasicDetails'
import { CoinPriceTable } from './features/coinPriceTable'
import { Heading } from './features/Heading'

function App() {

  return (
    <div className="flex flex-col h-screen justify-start items-center bg-black">
      <Heading/>
      <CoinBasicDetails/>
      <CoinPriceTable/>
    </div>
  )
}

export default App
