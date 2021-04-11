import { configureStore, createSlice } from '@reduxjs/toolkit';
import todoReducer from './slices/todosSlice';
import routineReducer from './slices/routinesSlice';
import itemReducer from './slices/itemsSlice';

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
        routine: routineReducer,
        item: itemReducer,
    },
});
