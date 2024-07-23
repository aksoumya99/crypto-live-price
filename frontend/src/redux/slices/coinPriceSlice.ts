import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    coinPricesData: [],
    status: 'idle',
    error: null
}

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

export const fetchPrice = createAsyncThunk('coinPrice/fetchPrice', async (coinCode, thunkAPI) => {
    try {
        const response = await axios.get(`${backendUrl}/api/data/${coinCode}`);
        return response.data;
    }
    catch(error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

const coinPriceSlice = createSlice({
    name: 'coinPrice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPrice.pending, (state) => {
            state.status = 'loading';
            console.log('loading');
        })
        .addCase(fetchPrice.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log('succeeded');
            state.coinPricesData = action.payload;
        })
        .addCase(fetchPrice.rejected, (state, action) => {
            state.status = 'failed';
            console.log('failed');
            state.error = action.error.message;
        })
    }
});

export const getCoinPricesData = (state) => {
    if(!state.coinPriceSlice.coinPricesData) {
        return [];
    }
    return state.coinPriceSlice.coinPricesData;
}

export const getFetchStatus = (state) => {
    return state.coinPriceSlice.status;
}

export default coinPriceSlice.reducer;