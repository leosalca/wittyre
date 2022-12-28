import { createSlice } from '@reduxjs/toolkit';
// ACR stands for Auto Complete Result

// create a slice of the store that will hold the user's ACRs
const userACRContainerSlice = createSlice({
    name: 'currentUserACRList',
    initialState: {
        currentUserACRList: []
    },
    reducers: {
        // set the user's ACRs
        setUserACRList: (state, action) => {
            state.currentUserACRList = action.payload;
        },
        // add a user's ACR
        addUserACR: (state, action) => {
            state.userACRList.push(action.payload);
        }
    }
});

// export the slice's actions
export const { setUserACRList, addUserACR } = userACRContainerSlice.actions;

// export the slice's reducer
export default userACRContainerSlice.reducer;


