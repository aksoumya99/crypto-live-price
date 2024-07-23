import { configureStore } from '@reduxjs/toolkit';
import coinPriceSliceReducer from './slices/coinPriceSlice';
import currentCoinSliceReducer from './slices/currentCoinSlice';
import showPopupSliceReducer from './slices/showPopupSlice';


export default configureStore({
    reducer: {
        coinPriceSlice: coinPriceSliceReducer,
        currentCoinSlice: currentCoinSliceReducer,
        showPopupSlice: showPopupSliceReducer
    }
})