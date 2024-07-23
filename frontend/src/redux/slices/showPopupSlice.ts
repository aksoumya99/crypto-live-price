import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false
}

const showPopupSlice = createSlice({
    name: 'showPopup',
    initialState,
    reducers: {
        toggleModalStatus: (state) => {
            state.value = !state.value
        }
    }
});

export const getToggleStatus = (state) => {
    return state.showPopupSlice.value;
}

export const { toggleModalStatus } = showPopupSlice.actions;

export default showPopupSlice.reducer;