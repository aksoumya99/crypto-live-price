import { CoinChangeModal } from "./coinChangeModal"
import { CoinCurrentDetails } from "./coinCurrentDetails"
import { CoinNameCard } from "./coinNameCard"

export const CoinBasicDetails = () => {
    return (
        <div className="w-full h-[10vh] flex m-8 justify-around items-center">
            <CoinNameCard/>
            <CoinCurrentDetails/>
            <CoinChangeModal/>
        </div>
    )
}