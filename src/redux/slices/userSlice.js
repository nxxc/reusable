import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        login: (state, action) => {
            return (state = action.payload);
        },
        logout: (state) => {
            return (state = null);
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
