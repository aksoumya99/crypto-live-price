import { coinMetaData } from "../utils/coinMetaData";
import { getToggleStatus } from "../redux/slices/showPopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalStatus } from "../redux/slices/showPopupSlice";
import { changeCoin } from "../redux/slices/currentCoinSlice";

export const CoinSelectModal = () => {
    const dispatch = useDispatch();
    const showPopup = useSelector(getToggleStatus);
    const coinCodes = Object.keys(coinMetaData);

    const toggleModal = () => {
        dispatch(toggleModalStatus());
    }

    const selectCoin = (coinCode) => {
        dispatch(changeCoin(coinCode));
        toggleModal();
    }

    const modal = coinCodes.map((coinCode, index) => {
        return (
            <div className="relative p-4 w-full max-w-2xl max-h-full cursor-default">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">
                    <h3 onClick={() => selectCoin(coinCode)} className="text-xl font-semibold text-gray-900 dark:text-white" >
                        {coinMetaData[coinCode].name}
                    </h3>
                    {
                        (index == 0) && <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    }
                </div>
            </div>
        )
    });

    return (
        <>
            {
                showPopup && <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full font-pixel">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {modal}
                    </div>
                </div>
            }
        </>
    )
}