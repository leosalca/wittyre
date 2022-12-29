import { createSlice } from '@reduxjs/toolkit';
// ACR stands for Auto Complete Result

// create a slice of the store that will hold selected ACR
const autoCompleteListSlice = createSlice({
    name: 'currentSelectedACR',
    initialState: {
        currentSelectedACR: ''
    },
    reducers: {
        // set the selected ACR
        selectACR: (state, action) => {
            state.currentSelectedACR = action.payload;
        },
    }
});

// export the slice's actions
export const { selectACR } = autoCompleteListSlice.actions;

// export the slice's reducer
export default autoCompleteListSlice.reducer;