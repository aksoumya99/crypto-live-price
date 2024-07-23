export const CoinNameCard = () => {
    return (
        <div className="text-white w-80 p-2 rounded bg-white/10 m-1 flex items-center flex-start">
            <img src="https://res.coinpaper.com/coinpaper/bitcoin_btc_logo_62c59b827e.png" className="max-h-12 max-w-12 w-2/12 object-contain" />
            <div className="w-5/12 pl-4 font-pixel">
                <p className="text-2xl">Bitcoin</p>
                <p className="text-sm text-white/50">BTC</p>
            </div>
            <div className="w-5/12 font-pixel">
                <p className="text-2xl">$66773.46</p>
                <p className="text-sm text-white/50">1.00000000 BTC</p>
            </div>
        </div>
    )
}