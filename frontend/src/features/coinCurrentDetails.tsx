export const CoinCurrentDetails = () => {
    return (
        <div className="text-white w-200 p-2 rounded bg-white/10 m-1 flex items-center flex-start">
            <div className="pl-2 font-pixel">
                <p className="text-sm text-white/50">Rank</p>
                <p className="text-xl">1</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">All Time High {"(USD)"}</p>
                <p className="text-xl">$66773.46</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">Total Supply</p>
                <p className="text-xl">19729815</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">Max Supply</p>
                <p className="text-xl">21000000</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">Volume</p>
                <p className="text-xl">35441087882</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">Market Cap</p>
                <p className="text-xl">$1.3 T</p>
            </div>
            <div className="pl-4 font-pixel">
                <p className="text-sm text-white/50">Vol/Cap</p>
                <p className="text-xl">$1.3 T</p>
            </div>
        </div>
    )
}