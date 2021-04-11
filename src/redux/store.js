import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice';
import routineReducer from './routinesSlice';
import itemReducer from './itemsSlice';

export default configureStore({
    reducer: {
        todo: todoReducer,
        routine: routineReducer,
        item: itemReducer,
    },
});
