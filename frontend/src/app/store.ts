import { configureStore } from '@reduxjs/toolkit';
import coinPriceSliceReducer from '../features/coinPriceSlice';


export default configureStore({
    reducer: {
        coinPriceSlice: coinPriceSliceReducer
    }
})