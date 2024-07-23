import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'BTC'
}

const currentCoinSlice = createSlice({
    name: 'currentCoin',
    initialState,
    reducers: {
        changeCoin: (state, action) => {
            console.log("Current Coin", action.payload);
            state.value = action.payload
        }
    }
});

export const getCurrentCoin = (state) => {
    return state.currentCoinSlice.value;
}

export const { changeCoin } = currentCoinSlice.actions;

export default currentCoinSlice.reducer;