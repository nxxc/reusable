import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            state = action.payload;
        },
        logout: (state) => {
            state = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
