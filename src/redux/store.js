import { configureStore, createSlice } from '@reduxjs/toolkit';
import todoReducer from './slices/todosSlice';
import postReducer from './slices/postSlice';
import itemReducer from './slices/itemsSlice';
import userReducer from './slices/userSlice';

const initialState = {
    isOpen: false,
};

const defaultSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        openDrawer: {
            reducer: (state) => {
                state.isOpen = true;
            },
        },
        closeDrawer: {
            reducer: (state) => {
                state.isOpen = false;
            },
        },
    },
});

export const { openDrawer, closeDrawer } = defaultSlice.actions;

export default configureStore({
    reducer: {
        base: defaultSlice.reducer,
        todo: todoReducer,
        post: postReducer,
        item: itemReducer,
        // user: userReducer,
    },
});
