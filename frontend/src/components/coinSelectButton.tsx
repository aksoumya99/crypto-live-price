import { useDispatch, useSelector } from "react-redux";
import { toggleModalStatus } from "../redux/slices/showPopupSlice";

export const CoinSelectButton = () => {
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(toggleModalStatus());
    }

    return (
        <>
            <button onClick={toggleModal} className="block h-3/6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-pixel" type="button">
                Change Coin
            </button>
        </>
    )
}