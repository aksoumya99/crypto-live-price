import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    coinPrice: 0,
    status: 'idle',
    error: null
}

export const fetchPrice = createAsyncThunk('coinPrice/fetchPrice', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/api/data/BTC');
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
            state.coinPrice = action.payload[0].rate;
        })
        .addCase(fetchPrice.rejected, (state, action) => {
            state.status = 'failed';
            console.log('failed');
            state.error = action.error.message;
        })
    }
});

export const getCoinPrice = (state) => {
    return state.coinPriceSlice.coinPrice;
}

export const getFetchStatus = (state) => {
    return state.coinPriceSlice.status;
}

export default coinPriceSlice.reducer;